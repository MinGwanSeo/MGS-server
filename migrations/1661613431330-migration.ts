import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1661613431330 implements MigrationInterface {
    name = 'migration1661613431330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`screenshot\` (\`id\` int NOT NULL AUTO_INCREMENT, \`vid\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`time\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`screenshot\``);
    }

}
