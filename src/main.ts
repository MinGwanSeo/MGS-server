import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import basicAuth from 'express-basic-auth'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  app.use(['/docs'], basicAuth({ challenge: true, users: { mgs: 'mgsmgs' } }))
  const swaggerOptions = new DocumentBuilder()
    .setTitle('MGS API Docs')
    .setDescription('MGS API Docs')
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app, swaggerOptions)
  SwaggerModule.setup('docs', app, document)
  await app.listen(3000)
}
bootstrap()
