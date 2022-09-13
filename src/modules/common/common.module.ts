import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommonController } from './common.controller'
import { CommonService } from './common.service'

@Module({
  imports: [],
  controllers: [CommonController],
  providers: [CommonService],
})
export class CommonModule {}
