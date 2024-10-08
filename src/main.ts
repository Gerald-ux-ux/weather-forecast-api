import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
config(); // Load environment variables from .env file
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  console.log(
    `Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`,
  );
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
