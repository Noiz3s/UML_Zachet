import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {PostEntityUml} from "../../post/entities/post.entity.uml";
import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {UserRole} from "../user.role";

@Entity()
export class UserEntityUml {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @IsString()
    email: string;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    @IsString()
    login: string;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty()
    @Column({ default: false })
    isLogged: boolean;

    @ApiProperty()
    posts: PostEntityUml[];

    @ApiProperty()
    @Column("simple-array", {default: ''})
    buyHistory: string[];

    @ApiProperty({ enum: UserRole, default: UserRole.USER })
    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;
}
