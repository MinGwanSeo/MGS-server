import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ApiExplain } from 'src/libs/decorator'
import { ScreenShot } from 'src/libs/entities/screenshot.entity'
import { CreateScreenShotRequest, ScreenShotsRequest } from './screenshot.dto'
import { ScreenShotService } from './screenshot.service'

@Controller('screenshots')
@ApiTags('스크린샷 API')
export class ScreenShotController {
  constructor(private readonly screenShotService: ScreenShotService) {}

  @Get()
  @ApiExplain({ returnType: [ScreenShot], summary: '스크린샷을 조회합니다.' })
  public async screenShots(@Query() screenShotsRequest: ScreenShotsRequest) {
    return this.screenShotService.findAll(screenShotsRequest)
  }

  @Post()
  @ApiExplain({
    returnType: String,
    summary: '스크린샷 저장',
    description: '스크린샷을 저장합니다.',
  })
  public async save(@Body() createScreenShotRequest: CreateScreenShotRequest) {
    await this.screenShotService.save(createScreenShotRequest)
    return 'OK'
  }
}
