import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { TredModule } from './tred/tred.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '@shared/database/database.module';
import { LikesModule } from './likes/likes.module';
import { CommentInModule } from './comment-in/comment-in.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, TredModule, CommentModule, LikesModule, CommentInModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
