import { IsNotEmpty, IsString } from 'class-validator';

export class PostCreateDTO {
    @IsNotEmpty()
    @IsString()
    title: String;

    @IsNotEmpty()
    @IsString()
    content: String;

    constructor(title: String, content: String) {
        this.title = title;
        this.content = content;
    }
}
