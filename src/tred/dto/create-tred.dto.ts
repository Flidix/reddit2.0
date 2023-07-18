import {IsString} from "class-validator";

export class CreateTredDto {
    @IsString()
    readonly title: string;
}
