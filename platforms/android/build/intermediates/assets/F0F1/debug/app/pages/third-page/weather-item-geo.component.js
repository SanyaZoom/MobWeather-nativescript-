"use strict";
var core_1 = require("@angular/core");
// Interface
var weather_item_geo_interface_1 = require("../../interfaces/weather-item-geo.interface");
var WeatherItemGeoComponent = (function () {
    function WeatherItemGeoComponent() {
    }
    return WeatherItemGeoComponent;
}());
__decorate([
    core_1.Input('item'),
    __metadata("design:type", weather_item_geo_interface_1.WeatherItemGEO)
], WeatherItemGeoComponent.prototype, "weatherItemGEO", void 0);
WeatherItemGeoComponent = __decorate([
    core_1.Component({
        selector: 'weather-item-geo',
        moduleId: module.id,
        templateUrl: './weather-item-geo.html',
    })
], WeatherItemGeoComponent);
exports.WeatherItemGeoComponent = WeatherItemGeoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1pdGVtLWdlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWF0aGVyLWl0ZW0tZ2VvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlEO0FBQ2pELFlBQVk7QUFDWiwwRkFBK0U7QUFRL0UsSUFBYSx1QkFBdUI7SUFBcEM7SUFFQSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQURrQjtJQUFkLFlBQUssQ0FBQyxNQUFNLENBQUM7OEJBQWlCLDJDQUFjOytEQUFDO0FBRHJDLHVCQUF1QjtJQU5uQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtLQUV6QyxDQUFDO0dBQ1csdUJBQXVCLENBRW5DO0FBRlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBJbnRlcmZhY2VcclxuaW1wb3J0IHsgV2VhdGhlckl0ZW1HRU8gfSAgIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3dlYXRoZXItaXRlbS1nZW8uaW50ZXJmYWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1pdGVtLWdlbycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dlYXRoZXItaXRlbS1nZW8uaHRtbCcsXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckl0ZW1HZW9Db21wb25lbnQge1xyXG4gICAgQElucHV0KCdpdGVtJykgd2VhdGhlckl0ZW1HRU86IFdlYXRoZXJJdGVtR0VPO1xyXG59XHJcbiJdfQ==