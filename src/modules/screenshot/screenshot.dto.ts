import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateScreenShotRequest {
  @IsNotEmpty({ message: '카카오 로그인 인가코드를 입력해주세요.' })
  @ApiProperty()
  image: string

  @IsNotEmpty({ message: '영상 유튜브 시간을 입력해주세요' })
  @ApiProperty()
  time: Date
}
