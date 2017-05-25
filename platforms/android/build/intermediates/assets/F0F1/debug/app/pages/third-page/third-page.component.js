"use strict";
var core_1 = require("@angular/core");
// Service
var weather_service_1 = require("../../service/weather.service");
// Interface
var weather_item_geo_interface_1 = require("../../interfaces/weather-item-geo.interface");
// nativescript-geolocation
var Geolocation = require("nativescript-geolocation");
// Moment.js
var moment = require("moment");
var ThirdPageComponent = (function () {
    function ThirdPageComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.cityFound = null;
    }
    ThirdPageComponent.prototype.getDeviceLocation = function () {
        return new Promise(function (resolve, reject) {
            Geolocation.enableLocationRequest().then(function () {
                Geolocation.getCurrentLocation({ timeout: 10000 }).then(function (location) {
                    resolve(location);
                }).catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    ThirdPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDeviceLocation().then(function (result) {
            if (result.latitude === 0 && result.longitude === 0) {
                alert('error in search your position!');
            }
            else {
                _this.getCity(result.latitude, result.longitude);
            }
        }, function (error) {
            console.error(error);
        });
    };
    ThirdPageComponent.prototype.getCity = function (lat, long) {
        var _this = this;
        this._weatherService.searchCityByGEOCoords(lat, long)
            .subscribe(function (data) {
            _this.cityFound = (data[1].name).split(",", 1);
        }, function (error) {
            alert(error);
        });
    };
    ThirdPageComponent.prototype.search = function () {
        var _this = this;
        this._weatherService.searchWeatherData(this.cityFound)
            .subscribe(function (data) {
            var weatherItemGeo = new weather_item_geo_interface_1.WeatherItemGEO(data.location.name, data.current.condition.text, moment(data.current.last_updated).format('HH:mm'), data.location.tz_id, data.current.temp_c, data.current.feelslike_c, data.current.wind_mph, data.current.wind_degree, data.current.humidity, data.current.pressure_mb, data.location.country, data.location.lat, data.location.lon, data.current.condition.icon.substring(30));
            _this._weatherService.addWeatherItemByGEO(weatherItemGeo);
        });
    };
    return ThirdPageComponent;
}());
ThirdPageComponent = __decorate([
    core_1.Component({
        selector: "third-page",
        template: "\n        <Button class=\"search-button\" text=\"Search\" (tap)=\"search()\"></Button>\n        <weather-list-geo></weather-list-geo>\n",
        styleUrls: ["pages/first-page/first-page.css"],
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], ThirdPageComponent);
exports.ThirdPageComponent = ThirdPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGlyZC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELFVBQVU7QUFDVixpRUFBa0U7QUFDbEUsWUFBWTtBQUNaLDBGQUFnRjtBQUNoRiwyQkFBMkI7QUFDM0Isc0RBQTZEO0FBQzdELFlBQVk7QUFDWixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFXL0IsSUFBYSxrQkFBa0I7SUFHM0IsNEJBQW1CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUYzQyxjQUFTLEdBQVEsSUFBSSxDQUFDO0lBRXVCLENBQUM7SUFFOUMsOENBQWlCLEdBQXhCO1FBQ0ksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUMxRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNoQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BELENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBTyxHQUFQLFVBQVEsR0FBRyxFQUFFLElBQUk7UUFBakIsaUJBVUM7UUFURyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7YUFDaEQsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNqRCxTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsSUFBTSxjQUFjLEdBQUcsSUFBSSwyQ0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQzdKLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUNySCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEksS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7QUFwRFksa0JBQWtCO0lBVDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUseUlBR2I7UUFDRyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO0tBQzlCLENBQUM7cUNBSXNDLGdDQUFjO0dBSHpDLGtCQUFrQixDQW9EOUI7QUFwRFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBTZXJ2aWNlXHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gICAgZnJvbSBcIi4uLy4uL3NlcnZpY2Uvd2VhdGhlci5zZXJ2aWNlXCI7XHJcbi8vIEludGVyZmFjZVxyXG5pbXBvcnQgeyBXZWF0aGVySXRlbUdFTyB9ICAgIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3dlYXRoZXItaXRlbS1nZW8uaW50ZXJmYWNlXCI7XHJcbi8vIG5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblxyXG5pbXBvcnQgKiBhcyBHZW9sb2NhdGlvbiAgICAgIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuLy8gTW9tZW50LmpzXHJcbmxldCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ0aGlyZC1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XCJzZWFyY2gtYnV0dG9uXCIgdGV4dD1cIlNlYXJjaFwiICh0YXApPVwic2VhcmNoKClcIj48L0J1dHRvbj5cclxuICAgICAgICA8d2VhdGhlci1saXN0LWdlbz48L3dlYXRoZXItbGlzdC1nZW8+XHJcbmAsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2ZpcnN0LXBhZ2UvZmlyc3QtcGFnZS5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtXZWF0aGVyU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRoaXJkUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgY2l0eUZvdW5kOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlKXt9XHJcblxyXG4gICAgcHVibGljIGdldERldmljZUxvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgR2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oe3RpbWVvdXQ6IDEwMDAwfSkudGhlbihsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldERldmljZUxvY2F0aW9uKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQubGF0aXR1ZGUgPT09IDAgJiYgcmVzdWx0LmxvbmdpdHVkZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ2Vycm9yIGluIHNlYXJjaCB5b3VyIHBvc2l0aW9uIScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDaXR5KHJlc3VsdC5sYXRpdHVkZSwgcmVzdWx0LmxvbmdpdHVkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENpdHkobGF0LCBsb25nKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2Uuc2VhcmNoQ2l0eUJ5R0VPQ29vcmRzKGxhdCwgbG9uZylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2l0eUZvdW5kID0gKGRhdGFbMV0ubmFtZSkuc3BsaXQoXCIsXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJEYXRhKHRoaXMuY2l0eUZvdW5kKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2VhdGhlckl0ZW1HZW8gPSBuZXcgV2VhdGhlckl0ZW1HRU8oZGF0YS5sb2NhdGlvbi5uYW1lLCBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsIG1vbWVudChkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkKS5mb3JtYXQoJ0hIOm1tJyksIGRhdGEubG9jYXRpb24udHpfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudC50ZW1wX2MsIGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYywgZGF0YS5jdXJyZW50LndpbmRfbXBoLCBkYXRhLmN1cnJlbnQud2luZF9kZWdyZWUsIGRhdGEuY3VycmVudC5odW1pZGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LnByZXNzdXJlX21iLCBkYXRhLmxvY2F0aW9uLmNvdW50cnksIGRhdGEubG9jYXRpb24ubGF0LCBkYXRhLmxvY2F0aW9uLmxvbiwgZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLnN1YnN0cmluZygzMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmFkZFdlYXRoZXJJdGVtQnlHRU8od2VhdGhlckl0ZW1HZW8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59Il19