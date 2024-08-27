import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { CordsController } from './cords.controller';
import { CordsService } from './cords.service';

@Module({
  imports: [HttpModule],
  controllers: [CordsController],
  providers: [CordsService],
})
export class CordsModule {}
