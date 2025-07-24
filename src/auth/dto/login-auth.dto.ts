import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginAuthDto {
    @ApiProperty({example:'qwerty@gmail.com'})
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty({example:'qwert1234'})
    @IsString()
    @MinLength(6)
    password: string
}
