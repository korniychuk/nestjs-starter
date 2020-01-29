import { NestFactory } from '@nestjs/core';

// Notice: don't import it from the '@configs/...'.
// It will not work, because of aliases start works only after this import
import './configs/ts-paths-fix-apply';

import { AppModule } from '@app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
