import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) { }

  async register(dto: RegisterAuthDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10)
    const createUser = await this.userService.create({
      ...dto,
      password: hashedPassword
    })

    const { password, ...result } = createUser;
    return result
  }
  async login(dto: LoginAuthDto) {
    const user = await this.userService.findByEmail(dto.email);
    if (!user) {
      throw new Error('user not found')
    }
    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) {
      throw new Error('invalid credentials');
    }
    const payload = { sub: user._id.toString(), role: user.role, email: user.email }
    return {
      accsess_token: this.jwtService.sign(payload,{
        secret:process.env.JWT_SECRET,
        expiresIn:'100d'
      })
    }
  }
  async findAll(){
    return this.userService.findAll()
  }
}
