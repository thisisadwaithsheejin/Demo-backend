import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from './schemas/admin.schemas';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config'; 

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    ConfigModule.forRoot(), 
    JwtModule.registerAsync({
      imports: [ConfigModule], 
      useFactory: async (configService: ConfigService) => ({
        
        secret: configService.get<string>('JWT_SECRET'), 
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{name:'Admin',schema:AdminSchema}])
  ],
  controllers: [AuthController],  
  providers: [AuthService]
})
export class AuthModule {}
