import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  regiter(@Body() body: RegisterAuthDto) {
    return this.authService.register(body)
  }

  @Post('login')
  login(@Body() body: LoginAuthDto) {
    return this.authService.login(body)
  }

  @Get()
  findAll(@Req() req:Request){
    return this.authService.findAll()
  }
}
