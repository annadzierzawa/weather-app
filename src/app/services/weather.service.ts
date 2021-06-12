import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(location: string): Observable<any> {
    return this.http.get(
      `http://api.weatherapi.com/v1/forecast.json?key=49dce478f9d942b8a73125603211206&q=${location}&days=7&aqi=yes&alerts=no`
    );
  }
}
