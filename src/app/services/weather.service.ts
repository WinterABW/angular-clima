import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  URI: string = '';
  ip: any = null;
  apikey: string = '9dedccc1d634a3dc4a40fcb16f04ad55';

  constructor(private _http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apikey}&units=metric&lang=es&q=`;
    this.ip = 'http://api.ipstack.com/check?access_key=1c70e3dfd950397a98b2cb69e6c2e14a';
  }
  getWeather(cityName: string, countryCode: string) {
    return this._http.get<any>(`${this.URI}${cityName},${countryCode}`);
  }

  getLocation() {
    return this._http.get<any>(this.ip);
  }
}
