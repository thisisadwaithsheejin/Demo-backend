import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from './customer.schema';

@Injectable()
export class CustomerRepo{
    constructor(@InjectModel(Customer.name) private CustomerModel: Model<CustomerDocument>) { }
    
        async addCustomer(CustomerObject: any) {
            let Customerlogs = new this.CustomerModel(CustomerObject)
            return Customerlogs.save()
        }  
    }
