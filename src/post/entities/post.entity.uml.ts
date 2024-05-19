import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class PostEntityUml {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    authorId: number;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    @IsString()
    title : string;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    @IsString()
    content: string;
}
