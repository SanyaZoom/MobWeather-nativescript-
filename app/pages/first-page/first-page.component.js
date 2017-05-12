"use strict";
var core_1 = require("@angular/core");
// Interface
var weather_item_interface_1 = require("../../interfaces/weather-item.interface");
// Service
var weather_service_1 = require("../../service/weather.service");
// Moment.js
var moment = require("moment");
var FirstPageComponent = (function () {
    function FirstPageComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.city = "";
    }
    FirstPageComponent.prototype.search = function () {
        var _this = this;
        this._weatherService.clearWeatherItems();
        this._weatherService.searchWeatherData(this.city)
            .subscribe(function (data) {
            var weatherItem = new weather_item_interface_1.WeatherItem(data.location.name, data.current.condition.text, moment(data.current.last_updated).format('HH:mm'), data.location.tz_id, data.current.temp_c, data.current.feelslike_c, data.current.wind_mph, data.current.wind_degree, data.current.humidity, data.current.pressure_mb, data.location.country, data.location.lat, data.location.lon, data.current.condition.icon.substring(30));
            _this._weatherService.addWeatherItem(weatherItem);
        });
    };
    return FirstPageComponent;
}());
FirstPageComponent = __decorate([
    core_1.Component({
        selector: "first-page",
        template: "\n        <StackLayout>\n            <TextField hint=\"City\" keyboardType=\"text\" autocorrect=\"false\" \n            autocapitalizationType=\"none\" [(ngModel)]=\"city\"></TextField>\n\n            <Button class=\"search-button\" text=\"Search\" (tap)=\"search()\"></Button>\n        </StackLayout>\n        <weather-list></weather-list>\n",
        styleUrls: ["pages/first-page/first-page.css"],
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], FirstPageComponent);
exports.FirstPageComponent = FirstPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQStDO0FBQy9DLFlBQVk7QUFDWixrRkFBeUU7QUFDekUsVUFBVTtBQUNWLGlFQUErRDtBQUMvRCxZQUFZO0FBQ1osSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBZ0IvQixJQUFhLGtCQUFrQjtJQUczQiw0QkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBRjVDLFNBQUksR0FBRyxFQUFFLENBQUM7SUFFcUMsQ0FBQztJQUV2RCxtQ0FBTSxHQUFOO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVDLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxJQUFNLFdBQVcsR0FBRyxJQUFJLG9DQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFDdkosSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQ3JILElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0SSxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksa0JBQWtCO0lBZDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsd1ZBUWI7UUFDRyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO0tBQzlCLENBQUM7cUNBSXVDLGdDQUFjO0dBSDFDLGtCQUFrQixDQWlCOUI7QUFqQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBJbnRlcmZhY2VcclxuaW1wb3J0IHsgV2VhdGhlckl0ZW0gfSAgICBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy93ZWF0aGVyLWl0ZW0uaW50ZXJmYWNlXCI7XHJcbi8vIFNlcnZpY2VcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS93ZWF0aGVyLnNlcnZpY2VcIjtcclxuLy8gTW9tZW50LmpzXHJcbmxldCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJmaXJzdC1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVwiQ2l0eVwiIGtleWJvYXJkVHlwZT1cInRleHRcIiBhdXRvY29ycmVjdD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgWyhuZ01vZGVsKV09XCJjaXR5XCI+PC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwic2VhcmNoLWJ1dHRvblwiIHRleHQ9XCJTZWFyY2hcIiAodGFwKT1cInNlYXJjaCgpXCI+PC9CdXR0b24+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8d2VhdGhlci1saXN0Pjwvd2VhdGhlci1saXN0PlxyXG5gLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9maXJzdC1wYWdlL2ZpcnN0LXBhZ2UuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbV2VhdGhlclNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJzdFBhZ2VDb21wb25lbnQge1xyXG4gICAgcHVibGljIGNpdHkgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge31cclxuXHJcbiAgICBzZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuY2xlYXJXZWF0aGVySXRlbXMoKTtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5zZWFyY2hXZWF0aGVyRGF0YSh0aGlzLmNpdHkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3ZWF0aGVySXRlbSA9IG5ldyBXZWF0aGVySXRlbShkYXRhLmxvY2F0aW9uLm5hbWUsIGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCwgbW9tZW50KGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQpLmZvcm1hdCgnSEg6bW0nKSwgZGF0YS5sb2NhdGlvbi50el9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LnRlbXBfYywgZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLCBkYXRhLmN1cnJlbnQud2luZF9tcGgsIGRhdGEuY3VycmVudC53aW5kX2RlZ3JlZSwgZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIsIGRhdGEubG9jYXRpb24uY291bnRyeSwgZGF0YS5sb2NhdGlvbi5sYXQsIGRhdGEubG9jYXRpb24ubG9uLCBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24uc3Vic3RyaW5nKDMwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuYWRkV2VhdGhlckl0ZW0od2VhdGhlckl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59Il19