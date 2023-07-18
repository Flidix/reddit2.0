import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put} from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import {JwtAuthGuard} from "../auth/decorators/auth.decorator";
import {CurrentUser} from "../auth/decorators/currentUser";

@UseGuards(JwtAuthGuard)
@Controller('like')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Put(':id')
  like(@CurrentUser("id") id: number, @Param('id') tredId: number) {
    return this.likesService.like(tredId, id);
  }
}
