import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntityUml } from '../entities/post.entity.uml';
import { CreatePostDto } from '../dto/post.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntityUml)
        private readonly postRepository: Repository<PostEntityUml>,
    ) {}

    async getAllPosts(): Promise<PostEntityUml[]> {
        return this.postRepository.find();
    }

    async getPostById(id: number): Promise<PostEntityUml> {
        return this.postRepository.findOne({ where: { id } });
    }

    async createPost(createPostDto: CreatePostDto): Promise<PostEntityUml> {
        const newPost = this.postRepository.create(createPostDto);
        return this.postRepository.save(newPost);
    }

    async deletePost(id: number): Promise<void> {
        await this.postRepository.delete(id);
    }
}
