import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    date: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}

export class UpdateTaskDto {
    @IsString()
    date?: string;

    @IsString()
    content?: string;
}