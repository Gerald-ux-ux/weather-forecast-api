import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class CordsService {
  constructor(private readonly httpService: HttpService) {}
  async getCityCords(city: string) {
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=8cbb90a03f4439fa1655c1e779d5ca92&state`;

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
