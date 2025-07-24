import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/schema/user.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async create(userId: string, courseId: string) {
    const user = await this.userModel.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    if (user.registeredCourses.includes(new Types.ObjectId(courseId))) {
      throw new ConflictException('Already registered');
    }

    user.registeredCourses.push(new Types.ObjectId(courseId));
    await user.save();
    return { message: 'Registered successfully' };
  }
}
