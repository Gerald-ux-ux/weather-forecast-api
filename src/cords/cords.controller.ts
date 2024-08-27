import { Controller, Get, Param } from '@nestjs/common';
import { CordsService } from './cords.service';

@Controller('cords')
export class CordsController {
  constructor(private readonly CordsService: CordsService) {}

  @Get(':city')
  getCords(@Param('city') city: string) {
    return this.CordsService.getCityCords(city);
  }
}
