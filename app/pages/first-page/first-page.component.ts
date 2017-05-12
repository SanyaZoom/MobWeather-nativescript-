import { Component }      from "@angular/core";
// Interface
import { WeatherItem }    from "../../interfaces/weather-item.interface";
// Service
import { WeatherService } from "../../service/weather.service";
// Moment.js
let moment = require("moment");

@Component({
    selector: "first-page",
    template: `
        <StackLayout>
            <TextField hint="City" keyboardType="text" autocorrect="false" 
            autocapitalizationType="none" [(ngModel)]="city"></TextField>

            <Button class="search-button" text="Search" (tap)="search()"></Button>
        </StackLayout>
        <weather-list></weather-list>
`,
    styleUrls: ["pages/first-page/first-page.css"],
    providers: [WeatherService]
})
export class FirstPageComponent {
    public city = "";

    constructor(private _weatherService: WeatherService) {}

    search() {
        this._weatherService.clearWeatherItems();
        this._weatherService.searchWeatherData(this.city)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.location.name, data.current.condition.text, moment(data.current.last_updated).format('HH:mm'), data.location.tz_id,
                        data.current.temp_c, data.current.feelslike_c, data.current.wind_mph, data.current.wind_degree, data.current.humidity,
                        data.current.pressure_mb, data.location.country, data.location.lat, data.location.lon, data.current.condition.icon.substring(30));
                    this._weatherService.addWeatherItem(weatherItem);
                }
            );
    }
}