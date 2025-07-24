import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';

@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Roles('admin','student')
  @Post()
  create(@Req() req: Request, @Body() body: CreateTaskDto) {
    console.log(req.user);
    return this.tasksService.create(req.user!.userId, body);
    
  }

  @Get()
 findAll(@Req() req: Request) {
    return this.tasksService.findAll(req.user!.userId);
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    return this.tasksService.findOne(req.user!.userId, id);
  }

  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(req.user!.userId, id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.tasksService.remove(req.user!.userId, id);
  }
}
