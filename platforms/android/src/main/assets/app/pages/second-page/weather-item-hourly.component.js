"use strict";
var core_1 = require("@angular/core");
// Interface
var weather_item_for_few_days_interface_1 = require("../../interfaces/weather-item-for-few-days.interface");
// Moment.js
var moment = require("moment");
var WeatherItemHourlyComponent = (function () {
    function WeatherItemHourlyComponent() {
        this.dateArr = [];
    }
    WeatherItemHourlyComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.weatherItemHourly.list.length; i++) {
            this.weatherItemHourly.list[i].date = moment(this.weatherItemHourly.list[i].date).format('ddd - DD MMM YYYY');
            this.dateArr.push(this.weatherItemHourly.list[i]);
            this.hourUpdate = moment(this.weatherItemHourly.timeUpdate).format('HH');
            this.checkTime(this.hourUpdate, this.dateArr[0].hour);
        }
    };
    WeatherItemHourlyComponent.prototype.checkTime = function (updateTime, arr) {
        var count = 0;
        var firstElement = [];
        for (var i = 0; i < arr.length; i++) {
            firstElement = arr[i].time;
            arr[i].time = moment(arr[i].time).format('HH');
            if (updateTime === arr[i].time) {
                this.dateArr[0].hour.splice(0, count);
                this.dateArr[0].hour[0].time = firstElement;
                break;
            }
            else {
                count++;
            }
        }
    };
    return WeatherItemHourlyComponent;
}());
__decorate([
    core_1.Input('hourlyItem'),
    __metadata("design:type", weather_item_for_few_days_interface_1.WeatherItemForFewDays)
], WeatherItemHourlyComponent.prototype, "weatherItemHourly", void 0);
WeatherItemHourlyComponent = __decorate([
    core_1.Component({
        selector: 'weather-item-hourly',
        moduleId: module.id,
        templateUrl: './weather-item-hourly.html',
    })
], WeatherItemHourlyComponent);
exports.WeatherItemHourlyComponent = WeatherItemHourlyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1pdGVtLWhvdXJseS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWF0aGVyLWl0ZW0taG91cmx5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlEO0FBQ3pELFlBQVk7QUFDWiw0R0FBZ0c7QUFDaEcsWUFBWTtBQUNaLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQU8vQixJQUFhLDBCQUEwQjtJQUx2QztRQU9XLFlBQU8sR0FBVSxFQUFFLENBQUM7SUEyQi9CLENBQUM7SUF4QkcsNkNBQVEsR0FBUjtRQUNJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUM5RyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6RCxDQUFDO0lBQ0wsQ0FBQztJQUVELDhDQUFTLEdBQVQsVUFBVSxVQUFVLEVBQUUsR0FBRztRQUNyQixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7UUFDdEIsSUFBSSxZQUFZLEdBQVUsRUFBRSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO2dCQUM1QyxLQUFLLENBQUM7WUFDVixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSyxFQUFFLENBQUM7WUFDWixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDTCxpQ0FBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE1QndCO0lBQXBCLFlBQUssQ0FBQyxZQUFZLENBQUM7OEJBQW9CLDJEQUFxQjtxRUFBQztBQURyRCwwQkFBMEI7SUFMdEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7S0FDNUMsQ0FBQztHQUNXLDBCQUEwQixDQTZCdEM7QUE3QlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIEludGVyZmFjZVxyXG5pbXBvcnQgeyBXZWF0aGVySXRlbUZvckZld0RheXMgfSAgICBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy93ZWF0aGVyLWl0ZW0tZm9yLWZldy1kYXlzLmludGVyZmFjZVwiO1xyXG4vLyBNb21lbnQuanNcclxubGV0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1pdGVtLWhvdXJseScsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dlYXRoZXItaXRlbS1ob3VybHkuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVySXRlbUhvdXJseUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoJ2hvdXJseUl0ZW0nKSB3ZWF0aGVySXRlbUhvdXJseTogV2VhdGhlckl0ZW1Gb3JGZXdEYXlzO1xyXG4gICAgcHVibGljIGRhdGVBcnI6IGFueVtdID0gW107XHJcbiAgICBwdWJsaWMgaG91clVwZGF0ZTogYW55O1xyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndlYXRoZXJJdGVtSG91cmx5Lmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVySXRlbUhvdXJseS5saXN0W2ldLmRhdGUgPSBtb21lbnQodGhpcy53ZWF0aGVySXRlbUhvdXJseS5saXN0W2ldLmRhdGUpLmZvcm1hdCgnZGRkIC0gREQgTU1NIFlZWVknKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRlQXJyLnB1c2godGhpcy53ZWF0aGVySXRlbUhvdXJseS5saXN0W2ldKTtcclxuICAgICAgICAgICAgdGhpcy5ob3VyVXBkYXRlID0gbW9tZW50KHRoaXMud2VhdGhlckl0ZW1Ib3VybHkudGltZVVwZGF0ZSkuZm9ybWF0KCdISCcpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVGltZSh0aGlzLmhvdXJVcGRhdGUsIHRoaXMuZGF0ZUFyclswXS5ob3VyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1RpbWUodXBkYXRlVGltZSwgYXJyKSB7XHJcbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBmaXJzdEVsZW1lbnQ6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmlyc3RFbGVtZW50ID0gYXJyW2ldLnRpbWU7XHJcbiAgICAgICAgICAgIGFycltpXS50aW1lID0gbW9tZW50KGFycltpXS50aW1lKS5mb3JtYXQoJ0hIJyk7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVUaW1lID09PSBhcnJbaV0udGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyWzBdLmhvdXIuc3BsaWNlKDAsIGNvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUFyclswXS5ob3VyWzBdLnRpbWUgPSBmaXJzdEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19