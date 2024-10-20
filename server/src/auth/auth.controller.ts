import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() payload: any, @Req() req: Request, @Res() res: Response) {
    const response = await this.authService.handleLogin(payload);
    return res.status(201).json({ data: response });
    // return 'sign in';
  }

  @Post('/signup')
  async signUp(
    @Body() payload: any,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log('payload', payload);
    const response = await this.authService.handleSignup(payload);
    return res.status(201).json({ data: response });
  }

  // @Get('/signup')
  // async signUp() {
  //   return 'hey';
  // }
}
