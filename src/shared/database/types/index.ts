import { DatabaseRepository } from '@shared/database/repositories/database.repository';

import { CommentEntity } from '../../../comment/entities/comment.entity';
import { LikeEntity } from '../../../likes/entities/like.entity';
import { UserEntity } from '../../../user/entities/user.entity';
import {TredEntity} from "../../../tred/entities/tred.entity";
import {CommentInEntity} from "../../../comment-in/entities/comment.entity";


export type DatabaseEntitiesType = {
  users: UserEntity;
  treds: TredEntity;
  comments: CommentEntity;

  likes: LikeEntity;
  commentIns: CommentInEntity;
};

export type DatabaseRepositories = {
  [table in keyof DatabaseEntitiesType]: DatabaseRepository<DatabaseEntitiesType[table]>;
};
