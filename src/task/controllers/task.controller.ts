import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { TaskEntityUml } from '../entities/task.entity.uml';
import { CreateTaskDto, UpdateTaskDto } from '../dto/task.dto';
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get('/getAllTasks')
    @ApiResponse({ status: 200, description: 'Return list of tasks', type: TaskEntityUml, isArray: true })
    async getAllTasks(): Promise<TaskEntityUml[]> {
        return this.taskService.getAllTasks();
    }

    @Get('/getTask/:id')
    @ApiResponse({ status: 200, description: 'Return task', type: TaskEntityUml, isArray: false })
    async getTaskById(@Param('id') id: number): Promise<TaskEntityUml> {
        return this.taskService.getTaskById(id);
    }

    @Post('/createTask')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiResponse({ status: 200, description: 'Return task', type: TaskEntityUml, isArray: false })
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntityUml> {
        return this.taskService.createTask(createTaskDto);
    }

    @Put('/updateTask/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiResponse({ status: 200, description: 'Return task', type: TaskEntityUml, isArray: false })
    async updateTask(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto): Promise<TaskEntityUml> {
        return this.taskService.updateTask(id, updateTaskDto);
    }

    @Delete('/deleteTask/:id')
    @ApiResponse({ status: 200, description: 'Return list of tasks', type: TaskEntityUml, isArray: true })
    async deleteTask(@Param('id') id: number): Promise<void> {
        return this.taskService.deleteTask(id);
    }
}
