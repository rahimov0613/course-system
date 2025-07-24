import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString } from 'class-validator';
export class CreateCourseDto {

    @ApiProperty({ example: 'phyton course' })
    @IsString()
    title: string;

    @ApiProperty({ example: 'example description' })
    @IsString()
    description: string;

    @ApiProperty({ example: '2025-07-31T12:00:00.000Z' })
    @IsDateString()
    startDate: string;

    @ApiProperty({ example: '2025-07-31T12:00:00.000Z' })
    @IsDateString()
    endDate: string;
}


