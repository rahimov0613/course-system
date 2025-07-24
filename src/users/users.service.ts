import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

  async create(dto: Partial<User>): Promise<User> {
    const newUser = new this.userModel(dto)
    return newUser.save()
  }
  async findByEmail(email: string): Promise<UserDocument | null> {

    return this.userModel.findOne({ email })
  }

  async findAll(){
    return this.userModel.find()
  }

}
