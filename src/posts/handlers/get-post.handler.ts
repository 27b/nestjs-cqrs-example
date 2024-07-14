import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPostQuery } from '../queries/get-post.query';
import { PostsService } from 'src/posts/posts.service';
import { PostViewDTO } from '../dtos/post-view.dto';
import { PostResponse } from '../responses/post.response';

@QueryHandler(GetPostQuery)
export class GetPostHandler implements IQueryHandler<GetPostQuery> {
    constructor(private readonly postsService: PostsService) {}

    async execute(query: GetPostQuery): Promise<PostResponse> {
        let { id } = query;

        let post = await this.postsService.findById(id);

        let postDTO = new PostViewDTO(post.title, post.content);

        let response = new PostResponse(postDTO);

        return response;
    }
}
