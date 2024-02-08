import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './schemas/admin.schemas';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(Admin.name)
        private adminModel:Model<Admin>,
        private jwtService:JwtService

    ){}


    async signUp(signUpDto:SignUpDto):Promise<{token:string}> { 
        const {name,email,password}=signUpDto

        const hashedPassword = await bcrypt.hash(password,10)

        const admin = await this.adminModel.create({
            name,
            email,
            password:hashedPassword
        })

        const token = this.jwtService.sign({id:admin._id,name:admin.name})

        return {token}
    }
    async login(loginDto:LoginDto): Promise<{token :string}>{
        const {email,password}=loginDto;
        const admin = await this.adminModel.findOne({email})
        if(!admin){
            throw new UnauthorizedException('Invalid email or password')
        }

        const isPasswordMatched = await bcrypt.compare(password,admin.password)
        
        if(!isPasswordMatched){
            throw new UnauthorizedException('Invalid email or password')
        }
        const token = this.jwtService.sign({id:admin._id,name:admin.name})

        return {token}
    }
}
