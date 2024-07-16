import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PostsService } from '../posts.service';
import { PostResponse } from '../responses/post.response';
import { UpdatePostCommand } from '../commands/update-post.command';

@CommandHandler(UpdatePostCommand)
export class UpdatePostHandler implements ICommandHandler<UpdatePostCommand> {
    constructor(private readonly postsService: PostsService) {}

    async execute(command: UpdatePostCommand): Promise<PostResponse> {
        let post = await this.postsService.update(command.id, command.data);

        let response = new PostResponse(post);

        return response;
    }
}
