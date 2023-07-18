import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { TredEntity } from '../../tred/entities/tred.entity';
import { BaseEntity } from '@shared/database/entities/base.entity';

import { databaseTables } from '@shared/database/constants';
import {LikeEntity} from "../../likes/entities/like.entity";


@Entity({ name: databaseTables.users })
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => TredEntity, (tred) => tred.user)
  treds: TredEntity[];

  @OneToMany(() => LikeEntity, (like) => like.fromUser)
  favourites: LikeEntity[];
}

