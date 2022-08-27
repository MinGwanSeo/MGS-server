import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateScreenShotRequest } from './screenshot.dto'
import { ScreenShotService } from './screenshot.service'

@Controller('screenshots')
@ApiTags('스크린샷 API')
export class ScreenShotController {
  constructor(private readonly screenShotService: ScreenShotService) {}

  @Post()
  @ApiResponse({ type: String })
  @ApiOperation({
    summary: '스크린샷 저장',
    description: '스크린샷을 저장합니다.',
  })
  public async save(@Body() createScreenShotRequest: CreateScreenShotRequest) {
    await this.screenShotService.save(createScreenShotRequest)
    return 'OK'
  }
}
