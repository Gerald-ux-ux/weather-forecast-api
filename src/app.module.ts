import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClimateModule } from './climate/climate.module';
import { CordsModule } from './cords/cords.module';

@Module({
  imports: [ClimateModule, CordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
