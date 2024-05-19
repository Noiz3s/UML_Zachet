import {IsNotEmpty, IsEmail, IsString, IsArray, IsEnum} from 'class-validator';
import {PostEntityUml} from "../../post/entities/post.entity.uml";
import {UserRole} from "../user.role";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    login: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export class UpdateUserMailDto {
    @IsEmail()
    email?: string;
}

export class UpdateUserStatusDto {
    @IsNotEmpty()
    isLogged?: boolean;
}

export class UpdateBuyHistoryDto {
    @IsArray()
    buyHistory?: string[];
}

export class UpdateUserRoleDto {
    @IsEnum(UserRole)
    role?: UserRole;
}

export class LoginUserDto {
    @IsNotEmpty()
    @IsString()
    login: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}