import { applyDecorators, Type } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiResponseMetadata } from '@nestjs/swagger'

type ApiExplainProps = {
  returnType: ApiResponseMetadata['type']
  summary: string
  description?: string
  deprecated?: boolean
}

export function ApiExplain(props: ApiExplainProps) {
  const { returnType, description, summary, deprecated } = props
  const decorators: Array<ClassDecorator | MethodDecorator | PropertyDecorator> = []

  decorators.push(ApiOperation({ summary, deprecated }))
  decorators.push(ApiResponse({ type: returnType, description }))

  return applyDecorators(...decorators)
}
