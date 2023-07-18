import { MigrationInterface, QueryRunner } from "typeorm";

export class TredEntity1689570213431 implements MigrationInterface {
    name = 'TredEntity1689570213431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "treds" DROP COLUMN "clicks"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "treds" ADD "clicks" integer NOT NULL DEFAULT '0'`);
    }

}
