import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { UserEntity } from '../../user/entities/user.entity';
import { BaseEntity } from '@shared/database/entities/base.entity';

import { databaseTables } from '@shared/database/constants';
import {CommentEntity} from "../../comment/entities/comment.entity";

@Entity({ name: databaseTables.treds })
export class TredEntity extends BaseEntity {
  @Column()
  title: string;


  @Column({ default: 0 })
  likesCount: number;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.tred)
  comments: CommentEntity[];


}
