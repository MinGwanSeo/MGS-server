import { ApiProperty } from '@nestjs/swagger'

export class UploadUrlResponse {
  @ApiProperty()
  url: string

  @ApiProperty()
  cdn: string
}
