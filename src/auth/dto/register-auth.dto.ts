import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsIn, IsString, MinLength } from "class-validator";

export class RegisterAuthDto {

        @ApiProperty({example:'qwerty'})
        @IsString()
        name: string;

        @ApiProperty({example:'qwerty@gmail.com'})
        @IsEmail()
        email: string

        @ApiProperty({example:'qwerty1234'})
        @IsString()
        @MinLength(6)
        password: string

        
        @IsIn(['student', 'admin'])
        role: 'student' | 'admin'
}
