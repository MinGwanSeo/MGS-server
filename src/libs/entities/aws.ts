import * as AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
})

export const awsS3 = new AWS.S3({ signatureVersion: 'v4', region: 'ap-northeast-2' })

export default AWS
