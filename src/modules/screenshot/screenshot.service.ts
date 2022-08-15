import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ScreenShot } from 'src/libs/entities/screenshot.entity'
import { Repository } from 'typeorm'
import { CreateScreenShotRequest } from './screenshot.dto'

@Injectable()
export class ScreenShotService {
  constructor(
    @InjectRepository(ScreenShot)
    private readonly screenShotRepository: Repository<ScreenShot>,
  ) {}

  public async save(createScreenShotRequest: CreateScreenShotRequest) {
    const { image, time } = createScreenShotRequest
    await this.screenShotRepository.save(new ScreenShot({ image, time }))
  }
}
