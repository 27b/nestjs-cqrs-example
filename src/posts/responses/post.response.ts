import { PostViewDTO } from '../dtos/post-view.dto';

export class PostResponse {
    constructor(public post: PostViewDTO) {
        this.post = post;
    }
}
