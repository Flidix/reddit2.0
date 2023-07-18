import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

import { CreateTredDto } from './dto/create-tred.dto';

@Injectable()
export class TredService extends DatabaseService {
  async getOne(id: number) {
    return await this.database.treds.findOneOrFail({
      where: { id },
      relations: {
        user: true,
        comments: {
          user: true,
          commentIns: {
            user: true,
          },
        },
      },
    });
  }
  async createTred(dto: CreateTredDto, id: number) {
    const user = await this.database.users.findOneOrFail({ where: { id: id } });
    return await this.database.treds.create({ ...dto, user });
  }

  async searchTreds(criteria: string) {
    const tred = await this.database.treds
      .createQueryBuilder('treds')
      .where('LOWER(treds.title) LIKE :title', { title: `%${criteria.toLowerCase()}%` })
      .getMany();
    return tred;
  }
}
