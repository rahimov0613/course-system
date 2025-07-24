import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post(':courseId/register')
  registerCourse(@Req() req: Request, @Param('courseId') courseId: string) {
    return this.studentsService.create(req.user!.userId, courseId)
  }

}
