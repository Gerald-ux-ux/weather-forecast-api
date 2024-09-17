import { Injectable } from '@nestjs/common';
import { GetClimateDto } from './dto/get-climate.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClimateService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async getCitiesClimate(data: GetClimateDto) {
    const apiKey = this.configService.get<string>('API_KEY');
    const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lng}4&appid=${apiKey}`;

    try {
      // Getting the data from the response and converting it to a readable value
      const data = this.httpService.get(api).pipe(map((res) => res.data));
      const res = await lastValueFrom(data);
      return res;
    } catch (error: any) {
      return error;
    }
  }
}
