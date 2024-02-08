import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps:true
})
export class Admin{

    @Prop()
    name:string;

    @Prop({unique:[true,'same email entered']})
    email:string;
    
    @Prop()
    password:string;
}
export const AdminSchema = SchemaFactory.createForClass(Admin);