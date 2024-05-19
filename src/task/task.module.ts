import { Module } from '@nestjs/common';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TaskEntityUml} from "./entities/task.entity.uml";

@Module({
    imports : [TypeOrmModule.forFeature([TaskEntityUml])],
    controllers: [TaskController],
    providers: [TaskService],
})
export class TaskModule {}