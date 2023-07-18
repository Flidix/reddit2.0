import { MigrationInterface, QueryRunner } from "typeorm";

export class TredEntity1689537246980 implements MigrationInterface {
    name = 'TredEntity1689537246980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_3d183ef3201232e81b22e2ec175"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "tredId"`);
        await queryRunner.query(`ALTER TABLE "treds" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "treds" ADD CONSTRAINT "FK_121b3f3baaa5e9aa037ec1ae854" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "treds" DROP CONSTRAINT "FK_121b3f3baaa5e9aa037ec1ae854"`);
        await queryRunner.query(`ALTER TABLE "treds" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "tredId" integer`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_3d183ef3201232e81b22e2ec175" FOREIGN KEY ("tredId") REFERENCES "treds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
