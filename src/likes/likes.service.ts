import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

import { CreateLikeDto } from './dto/create-like.dto';

@Injectable()
export class LikesService extends DatabaseService {
  async like(id: number, userId: number) {
    const tred = await this.database.treds.findOneOrFail({ where: { id } });
    const likeData = {
      fromUser: { id: userId },
      tTred: { id: id },
    };
    const isLike = await this.database.likes.findOne({where: {...likeData},});
    if (isLike) {
      tred.likesCount--;
      await this.database.likes.delete({id: isLike.id});
    } else {
      tred.likesCount++;
      await this.database.likes.create(likeData);
    };
    await this.database.treds.save(tred);
    return !isLike;
  }
}
