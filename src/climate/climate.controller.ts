import { Controller, Get, Query } from '@nestjs/common';
import { ClimateService } from './climate.service';

@Controller('climate')
export class ClimateController {
  constructor(private readonly ClimateService: ClimateService) {}
  @Get('')
  getCityClimate(@Query('lat') lat: number, @Query('lng') lng: number) {
    const data = {
      lat,
      lng,
    };
    return this.ClimateService.getCitiesClimate(data);
  }
}
