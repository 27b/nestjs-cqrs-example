import { PostViewDTO } from '../dtos/post-view.dto';

export class PostListResponse {
    constructor(public posts: PostViewDTO[]) {
        this.posts = posts;
    }
}
