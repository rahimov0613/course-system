import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, taskSchema } from './schema/task.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: taskSchema }]),
    UsersModule
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule { }
