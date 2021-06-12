import { Component, Input } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color } from "ng2-charts";

@Component({
  selector: 'app-seven-days-weather',
  templateUrl: './seven-days-weather.component.html',
  styleUrls: ['./seven-days-weather.component.scss']
})
export class SevenDaysWeatherComponent {

  @Input() set weather(value: any) {
    this.weatherObj = value;

    this.setChartData(this.weatherObj);
  }

  weatherObj: any;

  weatherChartData: ChartDataSets[] = [];
  weatherChartLabels: any[] = [];
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
      }],
      yAxes: [{
        ticks: {
          min: -10,
          suggestedMax: 35,
          stepSize: 100,
          fontSize: 11
        }
      }]
    }
  }

  chartColors: Color[] = [
    {
      backgroundColor: "#e89a32"
    }
  ];

  setChartData(weather: any): void {
    this.weatherChartLabels = weather.forecast.forecastday.map((w: any) => w.date);
    this.weatherChartData = [{
      data: weather.forecast.forecastday.map((w: any) => w.day.maxtemp_c),
      label: "Temperatura",
      fill: false
    }];

  }
}
