import { Injectable }                                             from '@angular/core';
import { Http }                                                   from '@angular/http';
import { Observable }                                             from "rxjs/Rx";
import { WEATHER_ITEMS, WEATHER_ITEMS_HOURLY, WEATHER_ITEMS_GEO } from "../weather.data";
import { WeatherItem }                                            from "../interfaces/weather-item.interface";
import { WeatherItemForFewDays }                                  from "../interfaces/weather-item-for-few-days.interface";
import { WeatherItemGEO }                                         from '../interfaces/weather-item-geo.interface';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {CityFound} from "../interfaces/city-found.interface";

@Injectable()
export class WeatherService {
    constructor (private _http: Http) {}

    getWeatherItems() {
        return WEATHER_ITEMS;
    }

    getHourlyWeatherItems() {
        return WEATHER_ITEMS_HOURLY;
    }

    getGEOWeatherItems() {
        return WEATHER_ITEMS_GEO;
    }

    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEMS.push(weatherItem);
    }

    addHourlyWeatherItem(weatherItemForFewDay: WeatherItemForFewDays) {
        WEATHER_ITEMS_HOURLY.push(weatherItemForFewDay);
    }

    addWeatherItemByGEO(weatherItemGEO: WeatherItemGEO) {
        WEATHER_ITEMS_GEO.push(weatherItemGEO);
    }

    clearWeatherItems() {
        WEATHER_ITEMS.splice(0);
    }

    clearHourlyWeatherItems() {
        WEATHER_ITEMS_HOURLY.splice(0);
    }

    searchWeatherData(cityName: string): Observable<any> {
        return this._http.get('https://api.apixu.com/v1/current.json?key=968c7a3b6b0d4ca08fc95022172102&q=' + cityName)
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }

    searchWeatherDataForFewDays(cityName: string, days: number): Observable<any> {
        return this._http.get('https://api.apixu.com/v1/forecast.json?key=968c7a3b6b0d4ca08fc95022172102&q=' + cityName + '&days=' + days)
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }


    searchCityByGEOCoords(lat: number, lon: number): Observable<CityFound[]> {
        return this._http.get('https://api.apixu.com/v1/search.json?key=968c7a3b6b0d4ca08fc95022172102&q=' + lat + '%20' + lon)
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }
}
