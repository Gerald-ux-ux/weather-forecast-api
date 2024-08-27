import { Module } from '@nestjs/common';

import { ClimateService } from './climate.service';

@Module({
  providers: [ClimateService],
})
export class ClimateModule {}
