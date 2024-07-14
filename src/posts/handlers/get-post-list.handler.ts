import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPostQuery } from '../queries/get-post.query';
import { PostsService } from 'src/posts/posts.service';
import { PostResponse } from '../responses/post.response';
import { GetPostListQuery } from '../queries/get-post-list.query';
import { PostListResponse } from '../responses/post-list.response';
import { PostViewDTO } from '../dtos/post-view.dto';

@QueryHandler(GetPostListQuery)
export class GetPostListHandler implements IQueryHandler<GetPostListQuery> {
    constructor(private readonly postsService: PostsService) {}

    async execute(query: GetPostListQuery): Promise<PostListResponse> {
        let posts = await this.postsService.findAll();

        let dtos = posts.map(post => new PostViewDTO(post.title, post.content));

        let response = new PostListResponse(dtos);

        return response;
    }
}
