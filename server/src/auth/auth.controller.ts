import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor() {}

  @Post('/signin')
  async signIn() {
    return 'sign in';
  }

  @Post('/signup')
  async signInTest(@Body() payload: any) {
    console.log('payload', payload);
    return 'sign in';
  }

  @Get('/signup')
  async signuP() {
    return 'hey';
  }
}
