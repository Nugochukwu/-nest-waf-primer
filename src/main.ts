import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as nunjucks from 'nunjucks';

async function bootstrap() {
  // Create a Nest application with Express under the hood
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Get the underlying Express instance
  const express = app.getHttpAdapter().getInstance();
  
  // Define the views directory (create it in the project root directory)
  const views = join(__dirname, '..', 'views');
  const users = join(__dirname, '..', 'views/users');
  //Define the static directory (create it in the project root directory )
  const staticAssets = join(__dirname, '..', 'static'); app.useStaticAssets(staticAssets);
  // Configure Nunjucks, setting views and the Express instance declared above
  nunjucks.configure(views, { express });
 

  // Start the application
  await app.listen(3000);
}

bootstrap();
