import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { PostEntityUml } from '../entities/post.entity.uml';
import { CreatePostDto } from '../dto/post.dto';
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('posts')
@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/getAllPosts')
    @ApiResponse({ status: 200, description: 'Return list of posts', type: PostEntityUml, isArray: true })
    async getAllPosts(): Promise<PostEntityUml[]> {
        return this.postService.getAllPosts();
    }

    @Get('/getPost/:id')
    @ApiResponse({ status: 200, description: 'Return post', type: PostEntityUml, isArray: false })
    async getPostById(@Param('id') id: number): Promise<PostEntityUml> {
        return this.postService.getPostById(id);
    }

    @Post('/createPost')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiResponse({ status: 200, description: 'Return post', type: PostEntityUml, isArray: false })
    async createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntityUml> {
        return this.postService.createPost(createPostDto);
    }

    @Delete('/deletePost/:id')
    @ApiResponse({ status: 200, description: 'Return list of posts', type: PostEntityUml, isArray: true })
    async deletePost(@Param('id') id: number): Promise<void> {
        return this.postService.deletePost(id);
    }
}
