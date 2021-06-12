import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { switchMap } from "rxjs/operators";

import { WeatherService } from "./services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  todayWeather$: Observable<any>;
  localizationControl = new FormControl("", Validators.required);
  searchSubject$ = new Subject<string>();

  constructor(private _weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.todayWeather$ = this.searchSubject$.pipe(
      switchMap(l => this._weatherService.getWeather(l))
    );
  }

  searchClicked(): void {
    this.searchSubject$.next(this.localizationControl.value)
  }
}

