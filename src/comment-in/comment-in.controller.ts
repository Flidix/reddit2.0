import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import { CommentInService } from './comment-in.service';
import {AddCommentInDto} from "./dto/create-comment.dto";
import {CurrentUser} from "../auth/decorators/currentUser";
import {JwtAuthGuard} from "../auth/decorators/auth.decorator";

@UseGuards(JwtAuthGuard)
@Controller('comment-in')
export class CommentInController {
  constructor(private readonly commentInService: CommentInService) {}

  @Post()
  createComment(@CurrentUser('id') id: number, @Body() dto: AddCommentInDto) {
      return this.commentInService.addComment(dto, id);
  }
}
