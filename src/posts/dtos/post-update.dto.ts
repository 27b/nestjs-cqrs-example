import { IsOptional, IsString } from 'class-validator';

export class PostUpdateDTO {
    @IsOptional()
    @IsString()
    title?: String;

    @IsOptional()
    @IsString()
    content?: String;

    constructor(title: String = null, content: String = null) {
        this.title = title;
        this.content = content;
    }
}
