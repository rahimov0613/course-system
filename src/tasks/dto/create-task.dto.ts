import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsIn, IsString } from "class-validator";

export class CreateTaskDto {
    @ApiProperty({ example: 'NodeJs' })
    @IsString()
    title: string

    @ApiProperty({ example: 'example description' })
    @IsString()
    description: string

    @ApiProperty({ enum: ['pending', 'in-progess', 'done'], default: 'pending' })
    @IsIn(['pending', 'in-progress', 'done'])
    status: 'pending' | 'in-progress' | 'done'

    @ApiProperty({ example: '2000-02-20' })
    @IsDate()
    @Type(() => Date)
    dueDate: Date
}
