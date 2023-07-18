import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';

import { TredService } from './tred.service';

import { CurrentUser } from '../auth/decorators/currentUser';

import { CreateTredDto } from './dto/create-tred.dto';
import {JwtAuthGuard} from "../auth/decorators/auth.decorator";

@UseGuards(JwtAuthGuard)
@Controller('tred')
export class TredController {
  constructor(private readonly tredService: TredService) {}

  @Get('find/:id')
  getOne(@Param('id') id: number) {
    return this.tredService.getOne(id);
  }
  @Post()
  createTred(@CurrentUser('id') id: number, @Body() dto: CreateTredDto) {
    return this.tredService.createTred(dto, id);
  }

  @Get('search')
  searchUser(@Query('query') query: string) {
    return this.tredService.searchTreds(query);
  }}
