import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntityUml } from '../entities/user.entity.uml';
import { CreateUserDto, UpdateUserMailDto, LoginUserDto, UpdateUserStatusDto, UpdateBuyHistoryDto, UpdateUserRoleDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntityUml)
        private readonly userRepository: Repository<UserEntityUml>,
    ) {}

    async getAllUsers(): Promise<UserEntityUml[]> {
        return this.userRepository.find();
    }

    async getUserById(id: number): Promise<UserEntityUml> {
        return this.userRepository.findOne({ where: { id } });
    }

    async createUser(createUserDto: CreateUserDto): Promise<UserEntityUml> {
        const { login } = createUserDto;

        const existingUser = await this.userRepository.findOne({ where: { login } });

        if (existingUser) {
            throw new HttpException('Пользователь с таким логином уже существует', HttpStatus.CONFLICT);
        }

        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    async updateUser(id: number, updateUserDto: UpdateUserMailDto): Promise<UserEntityUml> {
        await this.userRepository.update(id, updateUserDto);
        return this.userRepository.findOne({ where: { id } });
    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async login(loginUserDto: LoginUserDto): Promise<UserEntityUml | null> {
        const user = await this.userRepository.findOne({
            where: {
                login: loginUserDto.login,
                password: loginUserDto.password,
            },
        });

        if (user) {
            user.isLogged = true;
            await this.userRepository.save(user);
            return user;
        }
        return null;
    }

    async updateUserStatus(id: number, UpdateUserStatusDto: UpdateUserStatusDto): Promise<UserEntityUml | null> {
        await this.userRepository.update(id, UpdateUserStatusDto);
        return this.userRepository.findOne({ where: { id } });
    }

    async updateUserRole(id: number, UpdateUserRoleDto: UpdateUserRoleDto): Promise<UserEntityUml | null> {
        await this.userRepository.update(id, UpdateUserRoleDto);
        return this.userRepository.findOne({ where: { id } });
    }

    async updateUserBuyHistory(id: number, updateUserBuyHistoryDto: UpdateBuyHistoryDto): Promise<UserEntityUml | null> {
        await this.userRepository.update(id, updateUserBuyHistoryDto);
        return this.userRepository.findOne({ where: { id } });
    }
}
