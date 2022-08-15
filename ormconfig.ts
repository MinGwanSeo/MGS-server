import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  port: Number(process.env.DATABASE_PORT ?? '3306'),
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [path.resolve(__dirname, 'src', 'libs', '**/*.entity.ts')],
  migrations: [path.resolve(__dirname, 'migrations', '*.ts')],
  cli: { migrationsDir: 'migrations' },
  logging: ['error'],
  timezone: '+09:00',
  charset: 'utf8mb4',
}

export default config
