import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { UserService } from './user.service';
import {CurrentUser} from "../auth/decorators/currentUser";
import {JwtAuthGuard} from "../auth/decorators/auth.decorator";

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile/:id')
  findOne(@Param('id') id: number) {
    return this.userService.findOneById(id);
  }
  @Get('my-profile')
  findMyProfile(@CurrentUser("id") id: number) {
    return this.userService.findOne(id);
  }
  @Get('search')
  searchUser(@Query('query') query: string) {
    return this.userService.searchUsers(query);
  }
}
