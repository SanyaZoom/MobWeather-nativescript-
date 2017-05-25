import { Component, OnInit } from "@angular/core";
// Service
import { WeatherService }    from "../../service/weather.service";
// Interface
import { WeatherItemGEO }    from "../../interfaces/weather-item-geo.interface";
// nativescript-geolocation
import * as Geolocation      from "nativescript-geolocation";
// Moment.js
let moment = require("moment");

@Component({
    selector: "third-page",
    template: `
        <Button class="search-button" text="Search" (tap)="search()"></Button>
        <weather-list-geo></weather-list-geo>
`,
    styleUrls: ["pages/first-page/first-page.css"],
    providers: [WeatherService]
})
export class ThirdPageComponent implements OnInit {
    public cityFound: any = null;

    constructor(public _weatherService: WeatherService){}

    public getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            Geolocation.enableLocationRequest().then(() => {
                Geolocation.getCurrentLocation({timeout: 10000}).then(location => {
                    resolve(location);
                }).catch(error => {
                    reject(error);
                });
            });
        });
    }

    ngOnInit() {
        this.getDeviceLocation().then(result => {
            if(result.latitude === 0 && result.longitude === 0) {
                alert('error in search your position!');
            } else {
                this.getCity(result.latitude, result.longitude);
            }
        }, error => {
            console.error(error);
        });
    }

    getCity(lat, long) {
        this._weatherService.searchCityByGEOCoords(lat, long)
            .subscribe(
                data => {
                    this.cityFound = (data[1].name).split(",", 1);
                },
                error => {
                    alert(error);
                }
            );
    }

    search() {
        this._weatherService.searchWeatherData(this.cityFound)
            .subscribe(
                data => {
                    const weatherItemGeo = new WeatherItemGEO(data.location.name, data.current.condition.text, moment(data.current.last_updated).format('HH:mm'), data.location.tz_id,
                        data.current.temp_c, data.current.feelslike_c, data.current.wind_mph, data.current.wind_degree, data.current.humidity,
                        data.current.pressure_mb, data.location.country, data.location.lat, data.location.lon, data.current.condition.icon.substring(30));
                    this._weatherService.addWeatherItemByGEO(weatherItemGeo);
                }
            );
    }
}