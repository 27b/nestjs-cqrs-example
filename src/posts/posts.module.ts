import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { PostsService } from './posts.service';
import { GetPostHandler } from './handlers/get-post.handler';
import { CreatePostHandler } from './handlers/create-post.handler';
import { Post } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetPostListHandler } from './handlers/get-post-list.handler';
import { UpdatePostHandler } from './handlers/update-post.handler';

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([Post])],
    controllers: [PostsController],
    providers: [
        PostsService,
        GetPostListHandler,
        GetPostHandler,
        CreatePostHandler,
        UpdatePostHandler,
    ],
})
export class PostsModule {}
