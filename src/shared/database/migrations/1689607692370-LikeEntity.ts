import { MigrationInterface, QueryRunner } from "typeorm";

export class LikeEntity1689607692370 implements MigrationInterface {
    name = 'LikeEntity1689607692370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "UQ_6d36f4721b01492d38e3d8e245b"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD "fromUserId" integer`);
        await queryRunner.query(`ALTER TABLE "likes" ADD "tTredId" integer`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_b6284f1d47e920e04db146cae91" FOREIGN KEY ("fromUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_34f4732933e39c39a6fc5df744d" FOREIGN KEY ("tTredId") REFERENCES "treds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_34f4732933e39c39a6fc5df744d"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_b6284f1d47e920e04db146cae91"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP COLUMN "tTredId"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP COLUMN "fromUserId"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "likes" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "likes" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "UQ_6d36f4721b01492d38e3d8e245b" UNIQUE ("email")`);
    }

}
