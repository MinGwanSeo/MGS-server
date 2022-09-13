import { v4 as uuidv4 } from 'uuid'

import { Injectable } from '@nestjs/common'
import { awsS3 } from 'src/libs/entities/aws'
import { UploadUrlResponse } from './common.dto'

@Injectable()
export class CommonService {
  constructor() {}

  public async getUploadUrl() {
    const fileName = uuidv4()
    const Bucket = 'elasticbeanstalk-ap-northeast-2-915776836431'
    const fullPath = `resources/${fileName}`
    const cdn =
      'https://elasticbeanstalk-ap-northeast-2-915776836431.s3.ap-northeast-2.amazonaws.com/'

    try {
      const url = await awsS3.getSignedUrlPromise('putObject', {
        Bucket,
        Key: fullPath,
        Expires: 60 * 5,
      })

      return { url, cdn: `${cdn}${fullPath}` } as UploadUrlResponse
    } catch (e) {
      console.log(e)
      throw new Error('업로드 URL 조회 에러')
    }
  }
}
