import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1662447797239 implements MigrationInterface {
    name = 'migration1662447797239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_def0ff45d9a7aee25d6e2d8743\` ON \`screenshot\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_def0ff45d9a7aee25d6e2d8743\` ON \`screenshot\` (\`vid\`)`);
    }

}
