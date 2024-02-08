import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userRepo } from './users.rep';
import { UserSchema,User } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService,userRepo],
})
export class UsersModule {}