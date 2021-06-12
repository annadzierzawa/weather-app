import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html'
})
export class AirQualityComponent {
  @Input() weather: any;
}
