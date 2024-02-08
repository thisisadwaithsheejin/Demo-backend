import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userRepo } from './users.rep';



@Injectable()
export class UsersService {
  users: any;
  constructor(private userrep: userRepo) {

  }


  async create(createUserDto: CreateUserDto) {
    let userLogs = await this.userrep.addUsers({
      name: createUserDto.name,
      email: createUserDto.email,
      password:createUserDto.password,
    })
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let objIndex = this.users.findIndex((obj) => obj.id === id);
    this.users[objIndex] = updateUserDto;
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.users = this.users.filter(function (item) {
      return item.id !== id
    })
    return "updated";
  }
}
