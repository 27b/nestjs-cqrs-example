import { ICommand } from '@nestjs/cqrs';
import { PostUpdateDTO } from '../dtos/post-update.dto';

export class UpdatePostCommand implements ICommand {
    constructor(
        public readonly id: number,
        public readonly data: PostUpdateDTO,
    ) {}
}
