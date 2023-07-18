import { Column, Entity, ManyToOne } from 'typeorm';

import { CommentEntity } from '../../comment/entities/comment.entity';
import { UserEntity } from '../../user/entities/user.entity';
import {databaseTables} from "@shared/database/constants";
import {BaseEntity} from "@shared/database/entities/base.entity";

@Entity({ name: databaseTables.commentIns })
export class CommentInEntity extends BaseEntity {
  @Column()
  text: string;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => CommentEntity, (comment) => comment.commentIns)
  forComment: CommentEntity;
}
