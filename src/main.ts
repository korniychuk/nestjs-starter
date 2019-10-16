/* eslint-disable import/first */
if (!process.env.IS_TS_NODE) {
  // eslint-disable-next-line global-require
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
