import { MigrationInterface, QueryRunner } from "typeorm";

export class CommentInEntity1689619262174 implements MigrationInterface {
    name = 'CommentInEntity1689619262174'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "commentIns" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "text" character varying NOT NULL, "userId" integer, "commentId" integer, CONSTRAINT "PK_5e1dee8112a76f69ecb99beee80" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "commentIns" ADD CONSTRAINT "FK_5f27ad45a6376834bcbca8ef1f1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "commentIns" ADD CONSTRAINT "FK_2d8544500eeb1f405fb2c505767" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "commentIns" DROP CONSTRAINT "FK_2d8544500eeb1f405fb2c505767"`);
        await queryRunner.query(`ALTER TABLE "commentIns" DROP CONSTRAINT "FK_5f27ad45a6376834bcbca8ef1f1"`);
        await queryRunner.query(`DROP TABLE "commentIns"`);
    }

}
