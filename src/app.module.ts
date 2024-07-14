import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';
import { PostsService } from './posts/posts.service';

@Module({
    imports: [PostsModule, DatabaseModule],
    controllers: [],
    providers: [PostsService],
})
export class AppModule {}
