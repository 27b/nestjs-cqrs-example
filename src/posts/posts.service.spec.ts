import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostCreateDTO } from './dtos/post-create.dto';

describe('PostService', () => {
    let service: PostsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot({
                    type: 'sqlite',
                    database: ':memory:',
                    entities: [Post],
                    synchronize: true,
                }),
                TypeOrmModule.forFeature([Post]),
            ],
            providers: [PostsService],
        }).compile();

        service = module.get<PostsService>(PostsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('create post', async () => {
        let newPost = new PostCreateDTO('hello world', 'lorem ipsum');
        let post = await service.create(newPost);

        expect(post.title).toBe(newPost.title);
    });

    it('get post', async () => {
        let newPost = new PostCreateDTO('hello world', 'lorem ipsum');

        await service.create(newPost);

        let post = await service.findById(1);

        expect(post.id).toBe(1);
    });

    it('get all posts', async () => {
        let post1 = new PostCreateDTO('post 1', 'lorem ipsum...');
        let post2 = new PostCreateDTO('post 2', 'lorem ipsum...');

        await service.create(post1);
        await service.create(post2);

        let posts = await service.findAll();

        expect(posts[0].id).toBe(1);
        expect(posts[1].id).toBe(2);
    });
});
