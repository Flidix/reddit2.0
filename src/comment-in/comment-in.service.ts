import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

import { AddCommentDto } from '../comment/dto/create-comment.dto';
import { AddCommentInDto } from './dto/create-comment.dto';

@Injectable()
export class CommentInService extends DatabaseService {
  async addComment(dto: AddCommentInDto, id: number) {
    const user = await this.database.users.findOneOrFail({ where: { id: id } });
    const forComment = await this.database.comments.findOneOrFail({ where: { id: dto.commentId } });
    return await this.database.commentIns.create({ ...dto, user, forComment});
  }
}
