import { Component }             from "@angular/core";
import { action }                from "ui/dialogs";
// Service
import { WeatherService }        from "../../service/weather.service";
// Interface
import { WeatherItemForFewDays } from "../../interfaces/weather-item-for-few-days.interface";

@Component({
    selector: "second-page",
    template: `
        <StackLayout>
            <TextField hint="City" keyboardType="text" autocorrect="false" 
            autocapitalizationType="none" [(ngModel)]="cityName"></TextField>
            <DockLayout (tap)="showMenu()" style="margin-top: 5px; margin-bottom: 5px;">
                <Label dock="left" text="days" style="width: 90%; margin-left: 5px;"></Label>
                <Label dock="right" text="{{days}}" style="width: 10%; margin-right: 5px;"></Label>
            </DockLayout>
            <Button class="search-button" text="Search" (tap)="search()"></Button>
        </StackLayout>
        <weather-list-hourly></weather-list-hourly>
`,
    providers: [WeatherService],
    styleUrls: ["pages/first-page/first-page.css"],
})
export class SecondPageComponent {
    public cityName = "";
    public days = 1;

    constructor(private _weatherService: WeatherService) {}

    showMenu() {
        action({
            message: "Days:",
            actions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result === "1") {
                this.days = 1;
            } else if (result === "2") {
                this.days = 2;
            } else if (result === "3") {
                this.days = 3;
            } else if (result === "4") {
                this.days = 4;
            } else if (result === "5") {
                this.days = 5;
            } else if (result === "6") {
                this.days = 6;
            } else if (result === "7") {
                this.days = 7;
            } else if (result === "8") {
                this.days = 8;
            } else if (result === "9") {
                this.days = 9;
            } else if (result === "10") {
                this.days = 10;
            }
        });
    }

    search() {
        this._weatherService.clearHourlyWeatherItems();
        this._weatherService.searchWeatherDataForFewDays(this.cityName, this.days)
            .subscribe(
                datas => {
                    const weatherItemForFewDay = new WeatherItemForFewDays(datas.location.name, datas.location.country, datas.location.lat,
                        datas.location.lon, datas.forecast.forecastday, datas.current.last_updated);
                    this._weatherService.addHourlyWeatherItem(weatherItemForFewDay);
                }
            );
    }
}