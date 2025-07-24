import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schema/task.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) { }

  async create(userId: string, dto: CreateTaskDto) {
    return this.taskModel.create({...dto,createdBy:new Types.ObjectId(userId)})
  }

 async findAll(userId:string){
  console.log(userId);
  
    return await  this.taskModel.find({createdBy:new Types.ObjectId(userId)}).exec()
  }
  
  async findOne(userId: string, id: string) {
    const task = await this.taskModel.findById({ _id: id, createdBy: userId });
    if (!task) {
      throw new Error('task not found')
    }
    return task
  }
  async update(userId: string, id: string, dto: UpdateTaskDto) {
    const task = await this.taskModel.findByIdAndUpdate({ _id: id, createdBy: userId }, dto, { new: true });
    if (!task) {
      throw new Error('task not found')
    }
    return task
  }
  async remove(userId: string, id: string) {
    const task = await this.taskModel.findOneAndDelete({ _id: id, createdBy: userId });
    if (!task) {
      throw new Error('task not found')
    }
    return task
  }
}
