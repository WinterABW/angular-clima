import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weather: any = null;
  errorDesc: any = null;
  city: string = '';
  code: string = '';
  res: any = null;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode).subscribe(
      (res) => {
        (this.weather = res), console.log(res);
      },
      (err) => (this.errorDesc = err)
    );
  }
  getLocation() {
    this.weatherService.getLocation().subscribe(
      (res) => {this.res=res, this.getWeather(res.city,res.country_code)
      },
      (err) => console.log(err)
    );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);
      this.city = cityName.value;
      this.code = countryCode.value;
      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please insert some values');
    }
    cityName.focus();
    return false;
  }
}
