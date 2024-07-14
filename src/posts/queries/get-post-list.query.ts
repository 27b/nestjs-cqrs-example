import { IQuery } from '@nestjs/cqrs';

export class GetPostListQuery implements IQuery {
    constructor() {}
}
