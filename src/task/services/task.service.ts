import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntityUml } from '../entities/task.entity.uml';
import { CreateTaskDto, UpdateTaskDto } from '../dto/task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntityUml)
        private readonly taskRepository: Repository<TaskEntityUml>,
    ) {}

    async getAllTasks(): Promise<TaskEntityUml[]> {
        return this.taskRepository.find();
    }

    async getTaskById(id: number): Promise<TaskEntityUml> {
        return this.taskRepository.findOne({ where: { id } });
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntityUml> {
        const newTask = this.taskRepository.create(createTaskDto);
        return this.taskRepository.save(newTask);
    }

    async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntityUml> {
        await this.taskRepository.update(id, updateTaskDto);
        return this.taskRepository.findOne({ where: { id } });
    }

    async deleteTask(id: number): Promise<void> {
        await this.taskRepository.delete(id);
    }
}
