import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as nunjucks from 'nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const viewsDir = join(__dirname, '..', 'views');
  const staticDir = join(__dirname, '..', 'public');

  app.useStaticAssets(staticDir);

  nunjucks.configure(viewsDir, {
    autoescape: true,
    express: app.getHttpAdapter().getInstance(),
  });

  await app.listen(3000);
}

bootstrap();
