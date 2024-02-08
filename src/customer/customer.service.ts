import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepo } from './customer.rep';

@Injectable()
export class CustomerService {
  Customer: any;
  constructor(private customerrep: CustomerRepo) {

  }


  async create(createCustomerDto: CreateCustomerDto) {
    let CustomerLogs = await this.customerrep.addCustomer({
      c_name: createCustomerDto.c_name,
      c_id: createCustomerDto.c_id,
      c_phone:createCustomerDto.c_phone,
    })
    return 'This action adds a new user';
  }

  findAll() {
    return this.Customer;
  }

  findOne(id: string) {
    return this.Customer.find(customer => customer.id === id);
  }

  update(id:string, updateCustomerDto: UpdateCustomerDto) {
    let objIndex = this.Customer.findIndex((obj) => obj.id === id);
    this.Customer[objIndex] = updateCustomerDto;
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    this.Customer = this.Customer.filter(function (item) {
      return item.id !== id
    })
    return "updated";
  }
}
