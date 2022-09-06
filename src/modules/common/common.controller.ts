import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UploadUrlResponse } from './common.dto'
import { CommonService } from './common.service'

@Controller('commons')
@ApiTags('Common API')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('upload')
  @ApiResponse({ type: UploadUrlResponse })
  @ApiOperation({ summary: '이미지 업로드 URL조회' })
  public async uploadUrl() {
    return this.commonService.getUploadUrl()
  }
}
