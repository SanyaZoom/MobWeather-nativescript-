import { Component, Input, OnChanges } from "@angular/core";
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
        <Label text="{{ foundCity }}"></Label>
        <weather-list-geo></weather-list-geo>
`,
    styleUrls: ["pages/first-page/first-page.css"],
    providers: [WeatherService]
})
export class ThirdPageComponent implements OnChanges {
    // public latitude: number;
    // public longitude: number;
    // private foundCity: string = '';
    // private data: any = {};
    //
    // public constructor(private _weatherService: WeatherService) {
    //     this.latitude = 0;
    //     this.longitude = 0;
    // }
    //
    // ngOnInit() {
    //     this.getDeviceLocation().then(result => {
    //         this.latitude = result.latitude;
    //         this.longitude = result.longitude;
    //         this.setPosition(this.latitude, this.longitude);
    //     }, error => {
    //         console.error(error);
    //     });
    // }
    //
    // private getDeviceLocation(): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         Geolocation.enableLocationRequest().then(() => {
    //             Geolocation.getCurrentLocation({timeout: 10000}).then(location => {
    //                 resolve(location);
    //             }).catch(error => {
    //                 reject(error);
    //             });
    //         });
    //     });
    // }
    //
    // setPosition(lat, long){
    //     this._weatherService.searchCityByGEOCoords(lat, long)
    //         .subscribe(
    //             data => {
    //                 this.foundCity = data[1].name;
    //                 this._weatherService.searchWeatherData(this.foundCity)
    //                     .subscribe(
    //                         data => {
    //                             this.data = data;
    //                             alert('latitude ' + lat + ' longitude ' + long);
    //                         }
    //                     );
    //             },
    //             error => {
    //                 alert(error);
    //             }
    //         );
    // }
    //
    // search() {
    //     const weatherItemGEO = new WeatherItemGEO(this.data.location.name, this.data.current.condition.text, moment(this.data.current.last_updated).format('HH:mm'), this.data.location.tz_id,
    //         this.data.current.temp_c, this.data.current.feelslike_c, this.data.current.wind_mph, this.data.current.wind_degree, this.data.current.humidity,
    //         this.data.current.pressure_mb, this.data.location.country, this.data.location.lat, this.data.location.lon, this.data.current.condition.icon.substring(30));
    //     this._weatherService.addWeatherItemByGEO(weatherItemGEO);
    // }

    @Input('lat') latitude: any;
    @Input('long') longitude: any;

    private foundCity: string = '';

    constructor(public _weatherService: WeatherService){}

    ngOnChanges() {
        if(this.latitude === 0 && this.longitude === 0) {
            alert('error in search your position!');
        } else {
            this._weatherService.searchCityByGEOCoords(this.latitude, this.longitude)
                .subscribe(
                    data => {
                        let myData = data;
                        console.log(myData);
                        this.foundCity = 'Test';
                    },
                    error => {
                        alert(error);
                    }
                );
        }
    }
}