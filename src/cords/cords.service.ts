import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class CordsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async getCityCords(city: string) {
    const apiKey = this.configService.get<string>('API_KEY');
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}&state`;

    try {
      // Getting the data from the response and converting it to a readable value
      const data = this.httpService
        .get(api)
        .pipe(map((response) => response.data));
      const res = await lastValueFrom(data);

      return res;
    } catch (error: any) {
      return error;
    }
  }
}
