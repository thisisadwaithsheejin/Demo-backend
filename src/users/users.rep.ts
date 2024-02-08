import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { usersDocument } from './user.schema';
import { User } from './user.schema';

@Injectable()
export class userRepo{
    constructor(@InjectModel(User.name) private userModel: Model<usersDocument>) { }
    
        async addUsers(UserObject: any) {
            let userlogs = new this.userModel(UserObject)
            return userlogs.save()
        }  
    }
