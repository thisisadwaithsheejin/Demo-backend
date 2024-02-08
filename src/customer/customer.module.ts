import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer, CustomerSchema } from './customer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerRepo } from './customer.rep';

@Module({
  imports:[MongooseModule.forFeature([{name:Customer.name,schema:CustomerSchema}])],
  controllers: [CustomerController],
  providers: [CustomerService,CustomerRepo],
})
export class CustomerModule {}
