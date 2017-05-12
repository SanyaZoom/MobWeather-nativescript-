"use strict";
var core_1 = require("@angular/core");
var dialogs_1 = require("ui/dialogs");
// Service
var weather_service_1 = require("../../service/weather.service");
// Interface
var weather_item_for_few_days_interface_1 = require("../../interfaces/weather-item-for-few-days.interface");
var SecondPageComponent = (function () {
    function SecondPageComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.cityName = "";
        this.days = 1;
    }
    SecondPageComponent.prototype.showMenu = function () {
        var _this = this;
        dialogs_1.action({
            message: "Days:",
            actions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result === "1") {
                _this.days = 1;
            }
            else if (result === "2") {
                _this.days = 2;
            }
            else if (result === "3") {
                _this.days = 3;
            }
            else if (result === "4") {
                _this.days = 4;
            }
            else if (result === "5") {
                _this.days = 5;
            }
            else if (result === "6") {
                _this.days = 6;
            }
            else if (result === "7") {
                _this.days = 7;
            }
            else if (result === "8") {
                _this.days = 8;
            }
            else if (result === "9") {
                _this.days = 9;
            }
            else if (result === "10") {
                _this.days = 10;
            }
        });
    };
    SecondPageComponent.prototype.search = function () {
        var _this = this;
        this._weatherService.clearHourlyWeatherItems();
        this._weatherService.searchWeatherDataForFewDays(this.cityName, this.days)
            .subscribe(function (datas) {
            var weatherItemForFewDay = new weather_item_for_few_days_interface_1.WeatherItemForFewDays(datas.location.name, datas.location.country, datas.location.lat, datas.location.lon, datas.forecast.forecastday, datas.current.last_updated);
            _this._weatherService.addHourlyWeatherItem(weatherItemForFewDay);
        });
    };
    return SecondPageComponent;
}());
SecondPageComponent = __decorate([
    core_1.Component({
        selector: "second-page",
        template: "\n        <StackLayout>\n            <TextField hint=\"City\" keyboardType=\"text\" autocorrect=\"false\" \n            autocapitalizationType=\"none\" [(ngModel)]=\"cityName\"></TextField>\n            <DockLayout (tap)=\"showMenu()\" style=\"margin-top: 5px; margin-bottom: 5px;\">\n                <Label dock=\"left\" text=\"days\" style=\"width: 90%; margin-left: 5px;\"></Label>\n                <Label dock=\"right\" text=\"{{days}}\" style=\"width: 10%; margin-right: 5px;\"></Label>\n            </DockLayout>\n            <Button class=\"search-button\" text=\"Search\" (tap)=\"search()\"></Button>\n        </StackLayout>\n        <weather-list-hourly></weather-list-hourly>\n",
        providers: [weather_service_1.WeatherService],
        styleUrls: ["pages/first-page/first-page.css"],
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], SecondPageComponent);
exports.SecondPageComponent = SecondPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vjb25kLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBc0Q7QUFDdEQsc0NBQW1EO0FBQ25ELFVBQVU7QUFDVixpRUFBc0U7QUFDdEUsWUFBWTtBQUNaLDRHQUE2RjtBQW1CN0YsSUFBYSxtQkFBbUI7SUFJNUIsNkJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUg1QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsU0FBSSxHQUFHLENBQUMsQ0FBQztJQUVzQyxDQUFDO0lBRXZELHNDQUFRLEdBQVI7UUFBQSxpQkE0QkM7UUEzQkcsZ0JBQU0sQ0FBQztZQUNILE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztZQUM1RCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1gsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ25CLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDckUsU0FBUyxDQUNOLFVBQUEsS0FBSztZQUNELElBQU0sb0JBQW9CLEdBQUcsSUFBSSwyREFBcUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFDbEgsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoRixLQUFJLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBL0NZLG1CQUFtQjtJQWpCL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxpckJBV2I7UUFDRyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBQzNCLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO0tBQ2pELENBQUM7cUNBS3VDLGdDQUFjO0dBSjFDLG1CQUFtQixDQStDL0I7QUEvQ1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgYWN0aW9uIH0gICAgICAgICAgICAgICAgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuLy8gU2VydmljZVxyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9ICAgICAgICBmcm9tIFwiLi4vLi4vc2VydmljZS93ZWF0aGVyLnNlcnZpY2VcIjtcclxuLy8gSW50ZXJmYWNlXHJcbmltcG9ydCB7IFdlYXRoZXJJdGVtRm9yRmV3RGF5cyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3dlYXRoZXItaXRlbS1mb3ItZmV3LWRheXMuaW50ZXJmYWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInNlY29uZC1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVwiQ2l0eVwiIGtleWJvYXJkVHlwZT1cInRleHRcIiBhdXRvY29ycmVjdD1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgWyhuZ01vZGVsKV09XCJjaXR5TmFtZVwiPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8RG9ja0xheW91dCAodGFwKT1cInNob3dNZW51KClcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDVweDsgbWFyZ2luLWJvdHRvbTogNXB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGRvY2s9XCJsZWZ0XCIgdGV4dD1cImRheXNcIiBzdHlsZT1cIndpZHRoOiA5MCU7IG1hcmdpbi1sZWZ0OiA1cHg7XCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBkb2NrPVwicmlnaHRcIiB0ZXh0PVwie3tkYXlzfX1cIiBzdHlsZT1cIndpZHRoOiAxMCU7IG1hcmdpbi1yaWdodDogNXB4O1wiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvRG9ja0xheW91dD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cInNlYXJjaC1idXR0b25cIiB0ZXh0PVwiU2VhcmNoXCIgKHRhcCk9XCJzZWFyY2goKVwiPjwvQnV0dG9uPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPHdlYXRoZXItbGlzdC1ob3VybHk+PC93ZWF0aGVyLWxpc3QtaG91cmx5PlxyXG5gLFxyXG4gICAgcHJvdmlkZXJzOiBbV2VhdGhlclNlcnZpY2VdLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9maXJzdC1wYWdlL2ZpcnN0LXBhZ2UuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vjb25kUGFnZUNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY2l0eU5hbWUgPSBcIlwiO1xyXG4gICAgcHVibGljIGRheXMgPSAxO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge31cclxuXHJcbiAgICBzaG93TWVudSgpIHtcclxuICAgICAgICBhY3Rpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkRheXM6XCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCJdLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheXMgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIjNcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlzID0gMztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiNFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheXMgPSA0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCI1XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IDU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIjZcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlzID0gNjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiN1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheXMgPSA3O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCI4XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IDg7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIjlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlzID0gOTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiMTBcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlzID0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuY2xlYXJIb3VybHlXZWF0aGVySXRlbXMoKTtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5zZWFyY2hXZWF0aGVyRGF0YUZvckZld0RheXModGhpcy5jaXR5TmFtZSwgdGhpcy5kYXlzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJdGVtRm9yRmV3RGF5ID0gbmV3IFdlYXRoZXJJdGVtRm9yRmV3RGF5cyhkYXRhcy5sb2NhdGlvbi5uYW1lLCBkYXRhcy5sb2NhdGlvbi5jb3VudHJ5LCBkYXRhcy5sb2NhdGlvbi5sYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLmxvY2F0aW9uLmxvbiwgZGF0YXMuZm9yZWNhc3QuZm9yZWNhc3RkYXksIGRhdGFzLmN1cnJlbnQubGFzdF91cGRhdGVkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5hZGRIb3VybHlXZWF0aGVySXRlbSh3ZWF0aGVySXRlbUZvckZld0RheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=