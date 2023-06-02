import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVICE_PORT, async () => {
    Logger.log(`server starts at ${await app.getUrl()}`);
  });
}
bootstrap();
