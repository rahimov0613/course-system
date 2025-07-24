import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsIn, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example:'qwerty'})
    @IsString()
    name: string;

    @ApiProperty({example:'qwerty@gmail.com'})
    @IsEmail()
    email: string

    @ApiProperty({example:'qwerty1234'})
    @IsString()
    password: string

    @ApiProperty({enum:['student','admin']})
    @IsIn(['student', 'admin'])
    role: 'student' | 'admin'
}
