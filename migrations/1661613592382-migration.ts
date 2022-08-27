import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1661613592382 implements MigrationInterface {
    name = 'migration1661613592382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`screenshot\` ADD UNIQUE INDEX \`IDX_def0ff45d9a7aee25d6e2d8743\` (\`vid\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`screenshot\` DROP INDEX \`IDX_def0ff45d9a7aee25d6e2d8743\``);
    }

}
