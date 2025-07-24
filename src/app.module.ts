import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, TasksModule, CoursesModule, StudentsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
