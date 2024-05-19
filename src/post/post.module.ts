import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntityUml} from './entities/post.entity.uml';

@Module({
    imports : [TypeOrmModule.forFeature([PostEntityUml])],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}
