import { Module } from '@nestjs/common';

import { ClimateService } from './climate.service';
import { ClimateController } from './climate.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ClimateController],
  providers: [ClimateService],
})
export class ClimateModule {}
