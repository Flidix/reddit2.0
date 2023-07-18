import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';

import * as process from 'process';
import { DataSource, SelectQueryBuilder } from 'typeorm';

import { DatabaseService } from '@shared/database/services/database.service';

import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService extends DatabaseService {
  constructor(@InjectDataSource() datasource: DataSource) {
    super(datasource);
  }

  async findOne(id: number) {
    return await this.database.users.findOneOrFail({
      where: { id },
      relations: {
        treds: true,
        favourites: {
          tTred: true,
        },
      },
    });
  }
  async findOneById(id: number) {
    return await this.database.users.findOneOrFail({
      where: { id },
      relations: {
        treds: true,
      },
    });
  }
  async searchUsers(criteria: string) {
    const users = await this.database.users
        .createQueryBuilder('user')
        .where('LOWER(user.username) LIKE :username', { username: `%${criteria.toLowerCase()}%` })
        .getMany();
    return users;
  }

}
