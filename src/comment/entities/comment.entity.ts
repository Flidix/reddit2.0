import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';

import { UserEntity } from '../../user/entities/user.entity';
import { BaseEntity } from '@shared/database/entities/base.entity';

import { databaseTables } from '@shared/database/constants';
import {TredEntity} from "../../tred/entities/tred.entity";
import {CommentInEntity} from "../../comment-in/entities/comment.entity";

@Entity({ name: databaseTables.comments })
export class CommentEntity extends BaseEntity {
  @Column()
  text: string;

  @Column({ default: 0 })
  likesCount: number;

  @ManyToOne(() => TredEntity, (tred) => tred.comments)
  tred: TredEntity;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @OneToMany(() => CommentInEntity, (commentIn) => commentIn.forComment)
  commentIns: CommentInEntity[];
}
