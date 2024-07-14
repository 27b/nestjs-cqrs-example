import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePostCommand } from '../commands/create-post.command';
import { PostsService } from '../posts.service';
import { PostResponse } from '../responses/post.response';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
    constructor(private readonly postsService: PostsService) {}

    async execute(command: CreatePostCommand): Promise<PostResponse> {
        let post = await this.postsService.create(command.data);

        let response = new PostResponse(post);

        return response;
    }
}
