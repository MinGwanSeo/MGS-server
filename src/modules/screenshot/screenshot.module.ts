import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScreenShot } from 'src/libs/entities/screenshot.entity'
import { ScreenShotController } from './screenshot.controller'
import { ScreenShotService } from './screenshot.service'

@Module({
  imports: [TypeOrmModule.forFeature([ScreenShot])],
  controllers: [ScreenShotController],
  providers: [ScreenShotService],
})
export class ScreenShotModule {}
