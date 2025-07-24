import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseDocument } from './schema/course.schema';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private readonly courseModel: Model<CourseDocument>) { }
  create(dto: CreateCourseDto) {
    return this.courseModel.create(dto)
  }

 async findAll() {
    return await this.courseModel.find().exec()
  }
  async findOne(id: string) {
    console.log(id);
    
    const course = await this.courseModel.findById(id);
    if (!course) {
      throw new Error('course not found')
    }
    return course
  }

  async update(id: string, dto: UpdateCourseDto) {
    const course = await this.courseModel.findByIdAndUpdate(id, dto, { new: true })
   if (!course) {
      throw new Error('course not found')
    }
    return course
  }
  async delete (id:string){
    const course = await this.courseModel.findByIdAndDelete(id)
    if (!course) {
      throw new Error('course not found')
    }
  }
}
