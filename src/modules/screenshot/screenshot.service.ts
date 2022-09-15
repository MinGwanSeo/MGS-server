import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ScreenShot } from 'src/libs/entities/screenshot.entity'
import { Repository } from 'typeorm'
import { CreateScreenShotRequest, ScreenShotsRequest } from './screenshot.dto'

@Injectable()
export class ScreenShotService {
  constructor(
    @InjectRepository(ScreenShot)
    private readonly screenShotRepository: Repository<ScreenShot>,
  ) {}

  public async findAll(screenShotsRequest: ScreenShotsRequest) {
    const { vid } = screenShotsRequest
    return this.screenShotRepository.find({ where: { vid }, order: { id: 'ASC' } })
  }

  public async save(createScreenShotRequest: CreateScreenShotRequest) {
    const { vid, image, vTime } = createScreenShotRequest
    await this.screenShotRepository.save(new ScreenShot({ vid, image, vTime }))
  }
}
