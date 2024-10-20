import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { hash, compare } from 'bcrypt';
import { randomUUID } from 'crypto';
import { loginDataDto, SignUpDataDto } from 'src/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaClient) {}
  async handleSignup(signupData: SignUpDataDto) {
    const checkUserExists = await this.prisma.profile.findFirst({
      where: { email: signupData.email },
    });

    console.log('user exist check', checkUserExists);

    if (checkUserExists) {
      throw new HttpException(
        'User with email already exists!',
        HttpStatus.AMBIGUOUS,
      );
    }

    signupData.password = await hash(signupData.password, 12);

    const createNewUser = await this.prisma.profile.create({
      data: {
        name: signupData.username,
        hashPassword: signupData.password,
        email: signupData.email,
        imageUrl: '',
        userId: randomUUID(),
      },
    });

    console.log('created', createNewUser);

    if (createNewUser) {
      return {
        status: 200,
        userId: createNewUser.userId,
        message: 'user created successfully!',
      };
    }
  }

  async handleLogin(loginData: loginDataDto) {
    const checkUserExists = await this.prisma.profile.findFirst({
      where: { email: loginData.email },
    });

    console.log('user exist check', checkUserExists);

    if (checkUserExists) {
      compare(loginData.password, checkUserExists.hashPassword, (err, res) => {
        if (res) {
          return {
            status: 200,
            userId: checkUserExists.userId,
          };
        }
        throw err;
      });
    }
  }
}
