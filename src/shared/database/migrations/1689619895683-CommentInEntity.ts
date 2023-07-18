import { MigrationInterface, QueryRunner } from "typeorm";

export class CommentInEntity1689619895683 implements MigrationInterface {
    name = 'CommentInEntity1689619895683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "commentIns" DROP CONSTRAINT "FK_2d8544500eeb1f405fb2c505767"`);
        await queryRunner.query(`ALTER TABLE "commentIns" RENAME COLUMN "commentId" TO "forCommentId"`);
        await queryRunner.query(`ALTER TABLE "commentIns" ADD CONSTRAINT "FK_59ed1fe2fa230c7cbb26204578b" FOREIGN KEY ("forCommentId") REFERENCES "comments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "commentIns" DROP CONSTRAINT "FK_59ed1fe2fa230c7cbb26204578b"`);
        await queryRunner.query(`ALTER TABLE "commentIns" RENAME COLUMN "forCommentId" TO "commentId"`);
        await queryRunner.query(`ALTER TABLE "commentIns" ADD CONSTRAINT "FK_2d8544500eeb1f405fb2c505767" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
