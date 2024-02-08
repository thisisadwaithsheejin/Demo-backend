import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
export type CustomerDocument = Customer & Document

@Schema()
export class Customer{
    @Prop({ required: true })
    c_name:string;

    @Prop({ required: true })
    c_id: number;

    @Prop({required:true})
    c_phone:number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);