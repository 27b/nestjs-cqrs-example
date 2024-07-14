import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPostQuery } from './queries/get-post.query';
import { PostCreateDTO } from './dtos/post-create.dto';
import { CreatePostCommand } from './commands/create-post.command';
import { PostResponse } from './responses/post.response';
import { PostListResponse } from './responses/post-list.response';
import { GetPostListQuery } from './queries/get-post-list.query';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus,
    ) {}

    @Get('/')
    async getAll(): Promise<PostListResponse> {
        return await this.queryBus.execute(new GetPostListQuery());
    }

    @Get('/:id')
    async getPostById(@Param('id') id: number): Promise<PostResponse> {
        return await this.queryBus.execute(new GetPostQuery(id));
    }

    @Post()
    async createPost(@Body() body: PostCreateDTO): Promise<PostResponse> {
        return await this.commandBus.execute(new CreatePostCommand(body));
    }
}
