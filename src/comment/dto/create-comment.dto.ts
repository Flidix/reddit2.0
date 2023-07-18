import {IsNumber, IsString} from "class-validator";

export class AddCommentDto {
    @IsNumber()
    readonly tredId: number

    @IsString()
    readonly text: string
}
