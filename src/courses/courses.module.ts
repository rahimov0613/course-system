import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './schema/course.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
    UsersModule
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule { }
