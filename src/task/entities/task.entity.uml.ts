import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class TaskEntityUml {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    @IsString()
    date: string;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    @IsString()
    content: string;
}
