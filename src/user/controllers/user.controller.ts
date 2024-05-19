import {
    Body,
    ConflictException,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {UserService} from '../services/user.service';
import {UserEntityUml} from '../entities/user.entity.uml';
import {
    CreateUserDto,
    LoginUserDto,
    UpdateBuyHistoryDto,
    UpdateUserMailDto,
    UpdateUserRoleDto,
    UpdateUserStatusDto
} from '../dto/user.dto';
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/getAllUsers')
    @ApiResponse({ status: 200, description: 'Return list of users', type: UserEntityUml, isArray: true })
    async getAllUsers(): Promise<UserEntityUml[]> {
        return this.userService.getAllUsers();
    }

    @Get('/getUserById/:id')
    @ApiResponse({ status: 200, description: 'Return user', type: UserEntityUml, isArray: false })
    async getUserById(@Param('id') id: number): Promise<UserEntityUml> {
        return this.userService.getUserById(id);
    }

    @Put('/updateUser/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiResponse({ status: 200, description: 'Return user', type: UserEntityUml, isArray: false })
    async updateUser(@Param('id') id: number, @Body() updateUserMailDto: UpdateUserMailDto): Promise<UserEntityUml> {
        return this.userService.updateUser(id, updateUserMailDto);
    }

    @Delete('/deleteUser/:id')
    @ApiResponse({ status: 200, description: 'Return list of users', type: UserEntityUml, isArray: true })
    async deleteUser(@Param('id') id: number): Promise<void> {
        return this.userService.deleteUser(id);
    }

    @Post('login')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiResponse({ status: 200, description: 'User logged in', type: UserEntityUml, isArray: false })
    async login(@Body() loginUserDto: LoginUserDto): Promise<UserEntityUml | string> {
        const user = await this.userService.login(loginUserDto);
        if (user) {
            return user;
        } else {
            return 'Invalid login credentials';
        }
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<UserEntityUml | string> {
        try {
            return await this.userService.createUser(createUserDto);
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            throw new ConflictException();
        }
    }

    @Get('/account')
    async getAccountInfo(@Req() request: any) {
        try {
            const userId = request.user.id;
            return await this.userService.getUserById(userId);
        } catch (error) {
            throw new Error('Ошибка получения данных пользователя');
        }
    }

    @Put('/updateUserStatus/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiResponse({ status: 200, description: 'Update user status', type: UserEntityUml })
    async updateUserStatus(@Param('id') id: number, @Body() updateUserStatusDto: UpdateUserStatusDto): Promise<UserEntityUml> {
        return this.userService.updateUserStatus(id, updateUserStatusDto);
    }

    @Put('/buyGame/:id')
    async buyGame(@Param('id') id: number, @Body() updateBuyHistoryDto: UpdateBuyHistoryDto): Promise<any> {
        return this.userService.updateUserBuyHistory(id, updateBuyHistoryDto);
    }

    @Put('/updateUserRole/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiResponse({ status: 200, description: 'Update user status', type: UserEntityUml })
    async updateUserRole(@Param('id') id: number, @Body() updateUserRoleDto: UpdateUserRoleDto): Promise<UserEntityUml> {
        return this.userService.updateUserRole(id, updateUserRoleDto);
    }
}
