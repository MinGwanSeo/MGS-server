import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateScreenShotRequest {
  @IsNotEmpty({ message: '유튜브 영상 id(vid)를 입력해주세요' })
  @ApiProperty()
  vid: string

  @IsNotEmpty({ message: '스크린샷 이미지 URL을 입력해주세요' })
  @ApiProperty()
  image: string

  @IsNotEmpty({ message: '영상 유튜브 시간을 입력해주세요' })
  @ApiProperty()
  vTime: number
}

export class ScreenShotsRequest {
  @IsNotEmpty({ message: '유튜브 영상 id(vid)를 입력해주세요' })
  @ApiProperty()
  vid: string
}
