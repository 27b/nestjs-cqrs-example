import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostViewDTO } from './dtos/post-view.dto';
import { PostCreateDTO } from './dtos/post-create.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
    ) {}

    async findAll(): Promise<Post[] | null> {
        return await this.postRepository.find();
    }

    async findById(id: number): Promise<Post | null> {
        let query = { where: { id } };

        let post = await this.postRepository.findOne(query);

        if (!post) return null;

        return post;
    }

    async create(data: PostCreateDTO): Promise<Post | null> {
        let { title, content } = data;

        let post = this.postRepository.create({ title, content });

        return await this.postRepository.save(post);
    }
}
