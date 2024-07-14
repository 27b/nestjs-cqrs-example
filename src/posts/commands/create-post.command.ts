import { ICommand } from '@nestjs/cqrs';
import { PostCreateDTO } from '../dtos/post-create.dto';

export class CreatePostCommand implements ICommand {
    constructor(public readonly data: PostCreateDTO) {}
}
