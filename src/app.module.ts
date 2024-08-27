import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClimateController } from './climate/climate.controller';
import { ClimateModule } from './climate/climate.module';
import { CordsModule } from './cords/cords.module';

@Module({
  imports: [ClimateModule, CordsModule],
  controllers: [AppController, ClimateController],
  providers: [AppService],
})
export class AppModule {}
