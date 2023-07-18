import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { CommentService } from './comment.service';
import {CurrentUser} from "../auth/decorators/currentUser";
import {AddCommentDto} from "./dto/create-comment.dto";
import {JwtAuthGuard} from "../auth/decorators/auth.decorator";

@UseGuards(JwtAuthGuard)
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  addComment(@CurrentUser('id') id: number, @Body() dto: AddCommentDto) {
      return this.commentService.createComment(dto, id);
  }

}
