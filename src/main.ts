import { NestFactory } from '@nestjs/core';

import './ts-paths-fix';
import { AppModule } from '@app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
