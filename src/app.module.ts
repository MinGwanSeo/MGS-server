import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getMetadataArgsStorage } from 'typeorm'
import { ScreenShotModule } from './modules/screenshot/screenshot.module'
import config from 'ormconfig'
import { ConfigModule } from '@nestjs/config'
import { CommonModule } from './modules/common/common.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(config, {
          entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
          autoLoadEntities: true,
        }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ScreenShotModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
