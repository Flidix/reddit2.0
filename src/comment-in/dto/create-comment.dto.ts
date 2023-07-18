import {IsNumber, IsString} from "class-validator";

export class AddCommentInDto {
    @IsNumber()
    readonly commentId: number

    @IsString()
    readonly text: string
}
