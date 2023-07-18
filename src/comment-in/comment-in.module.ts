import { Module } from '@nestjs/common';
import { CommentInService } from './comment-in.service';
import { CommentInController } from './comment-in.controller';
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {getJwtConfig} from "../config/jwtr.config";

@Module({
  controllers: [CommentInController],
  providers: [CommentInService],
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
  ],
})
export class CommentInModule {}
