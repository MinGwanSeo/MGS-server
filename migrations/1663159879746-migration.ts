import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1663159879746 implements MigrationInterface {
    name = 'migration1663159879746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`screenshot\` CHANGE \`time\` \`vTime\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`screenshot\` DROP COLUMN \`vTime\``);
        await queryRunner.query(`ALTER TABLE \`screenshot\` ADD \`vTime\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`screenshot\` DROP COLUMN \`vTime\``);
        await queryRunner.query(`ALTER TABLE \`screenshot\` ADD \`vTime\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`screenshot\` CHANGE \`vTime\` \`time\` datetime NOT NULL`);
    }

}
