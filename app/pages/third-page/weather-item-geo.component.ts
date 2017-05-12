import { Component, Input } from '@angular/core';
// Interface
import { WeatherItemGEO }   from "../../interfaces/weather-item-geo.interface";

@Component({
    selector: 'weather-item-geo',
    moduleId: module.id,
    templateUrl: './weather-item-geo.html',

})
export class WeatherItemGeoComponent {
    @Input('item') weatherItemGEO: WeatherItemGEO;
}
