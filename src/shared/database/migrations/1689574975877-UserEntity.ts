import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntity1689574975877 implements MigrationInterface {
    name = 'UserEntity1689574975877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "likes" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "likes"`);
    }

}
