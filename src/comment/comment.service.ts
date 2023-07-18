import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

import { AddCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService extends DatabaseService {
  async createComment(dto: AddCommentDto, id: number) {
    const user = await this.database.users.findOneOrFail({ where: { id: id } });
    const tred = await this.database.treds.findOneOrFail({ where: { id: dto.tredId } });
    return await this.database.comments.create({ ...dto, user, tred });
  }
}
