"use strict";
var core_1 = require("@angular/core");
// Service
var weather_service_1 = require("../../service/weather.service");
var WeatherListGeoComponent = (function () {
    function WeatherListGeoComponent(_weatherService) {
        this._weatherService = _weatherService;
    }
    WeatherListGeoComponent.prototype.ngOnInit = function () {
        this.weatherItemsGeo = this._weatherService.getGEOWeatherItems();
    };
    return WeatherListGeoComponent;
}());
WeatherListGeoComponent = __decorate([
    core_1.Component({
        selector: 'weather-list-geo',
        moduleId: module.id,
        templateUrl: './weather-list-geo.html'
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherListGeoComponent);
exports.WeatherListGeoComponent = WeatherListGeoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1saXN0LWdlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWF0aGVyLWxpc3QtZ2VvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELFVBQVU7QUFDVixpRUFBa0U7QUFTbEUsSUFBYSx1QkFBdUI7SUFHaEMsaUNBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFHLENBQUM7SUFFdkQsMENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksdUJBQXVCO0lBTG5DLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUseUJBQXlCO0tBQ3pDLENBQUM7cUNBSXVDLGdDQUFjO0dBSDFDLHVCQUF1QixDQVFuQztBQVJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8gU2VydmljZVxyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9ICAgIGZyb20gXCIuLi8uLi9zZXJ2aWNlL3dlYXRoZXIuc2VydmljZVwiO1xyXG4vLyBJbnRlcmZhY2VcclxuaW1wb3J0IHsgV2VhdGhlckl0ZW1HRU8gfSAgICBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy93ZWF0aGVyLWl0ZW0tZ2VvLmludGVyZmFjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItbGlzdC1nZW8nLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi93ZWF0aGVyLWxpc3QtZ2VvLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyTGlzdEdlb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB3ZWF0aGVySXRlbXNHZW86IFdlYXRoZXJJdGVtR0VPW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLndlYXRoZXJJdGVtc0dlbyA9IHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldEdFT1dlYXRoZXJJdGVtcygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==