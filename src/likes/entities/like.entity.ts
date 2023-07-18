import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { TredEntity } from '../../tred/entities/tred.entity';
import { BaseEntity } from '@shared/database/entities/base.entity';

import { databaseTables } from '@shared/database/constants';
import {UserEntity} from "../../user/entities/user.entity";

@Entity({ name: databaseTables.likes })
export class LikeEntity extends BaseEntity {
  @ManyToOne(() => UserEntity)
  fromUser: UserEntity;

  @ManyToOne(() => TredEntity)
  tTred: TredEntity;
}
