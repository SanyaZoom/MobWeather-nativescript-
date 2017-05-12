import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule }         from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule }    from "nativescript-angular/forms";
import { NativeScriptHttpModule }     from "nativescript-angular/http";

import { AppComponent }               from "./app.component";

import { FirstPageComponent }         from "./pages/first-page/first-page.component";
import { WeatherListComponent }       from "./pages/first-page/weater-list.component";
import { WeatherItemComponent }       from "./pages/first-page/weather-item.component";
import { SecondPageComponent }        from "./pages/second-page/second-page.component";
import { WeatherListHourlyComponent } from "./pages/second-page/weather-list-hourly.component";
import { WeatherItemHourlyComponent } from "./pages/second-page/weather-item-hourly.component";
import { ElementComponent }           from "./pages/second-page/element.component";
import { ThirdPageComponent }         from "./pages/third-page/third-page.component";
import { WeatherListGeoComponent }    from "./pages/third-page/weather-list-geo.component";
import { WeatherItemGeoComponent }    from "./pages/third-page/weather-item-geo.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
    ],
    declarations: [
        AppComponent,
        FirstPageComponent,
        WeatherListComponent,
        WeatherItemComponent,

        SecondPageComponent,
        WeatherListHourlyComponent,
        WeatherItemHourlyComponent,
        ElementComponent,

        ThirdPageComponent,
        WeatherListGeoComponent,
        WeatherItemGeoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
