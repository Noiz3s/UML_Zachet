import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntityUml} from "./entities/user.entity.uml";

@Module({
    imports : [TypeOrmModule.forFeature([UserEntityUml])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
