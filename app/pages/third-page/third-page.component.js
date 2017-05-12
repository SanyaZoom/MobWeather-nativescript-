"use strict";
var core_1 = require("@angular/core");
// Service
var weather_service_1 = require("../../service/weather.service");
// Moment.js
var moment = require("moment");
var ThirdPageComponent = (function () {
    function ThirdPageComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.foundCity = '';
    }
    ThirdPageComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.latitude === 0 && this.longitude === 0) {
            alert('error in search your position!');
        }
        else {
            this._weatherService.searchCityByGEOCoords(this.latitude, this.longitude)
                .subscribe(function (data) {
                var myData = data;
                console.log(myData);
                _this.foundCity = 'Test';
            }, function (error) {
                alert(error);
            });
        }
    };
    return ThirdPageComponent;
}());
__decorate([
    core_1.Input('lat'),
    __metadata("design:type", Object)
], ThirdPageComponent.prototype, "latitude", void 0);
__decorate([
    core_1.Input('long'),
    __metadata("design:type", Object)
], ThirdPageComponent.prototype, "longitude", void 0);
ThirdPageComponent = __decorate([
    core_1.Component({
        selector: "third-page",
        template: "\n        <Button class=\"search-button\" text=\"Search\" (tap)=\"search()\"></Button>\n        <Label text=\"{{ foundCity }}\"></Label>\n        <weather-list-geo></weather-list-geo>\n",
        styleUrls: ["pages/first-page/first-page.css"],
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], ThirdPageComponent);
exports.ThirdPageComponent = ThirdPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGlyZC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTREO0FBQzVELFVBQVU7QUFDVixpRUFBa0U7QUFLbEUsWUFBWTtBQUNaLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQVkvQixJQUFhLGtCQUFrQjtJQWdFM0IsNEJBQW1CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUYxQyxjQUFTLEdBQVcsRUFBRSxDQUFDO0lBRXFCLENBQUM7SUFFckQsd0NBQVcsR0FBWDtRQUFBLGlCQWdCQztRQWZHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDcEUsU0FBUyxDQUNOLFVBQUEsSUFBSTtnQkFDQSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQzVCLENBQUMsRUFDRCxVQUFBLEtBQUs7Z0JBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FDSixDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFuRkQsSUFtRkM7QUF4QmlCO0lBQWIsWUFBSyxDQUFDLEtBQUssQ0FBQzs7b0RBQWU7QUFDYjtJQUFkLFlBQUssQ0FBQyxNQUFNLENBQUM7O3FEQUFnQjtBQTVEckIsa0JBQWtCO0lBVjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsMkxBSWI7UUFDRyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO0tBQzlCLENBQUM7cUNBaUVzQyxnQ0FBYztHQWhFekMsa0JBQWtCLENBbUY5QjtBQW5GWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBTZXJ2aWNlXHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gICAgZnJvbSBcIi4uLy4uL3NlcnZpY2Uvd2VhdGhlci5zZXJ2aWNlXCI7XHJcbi8vIEludGVyZmFjZVxyXG5pbXBvcnQgeyBXZWF0aGVySXRlbUdFTyB9ICAgIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3dlYXRoZXItaXRlbS1nZW8uaW50ZXJmYWNlXCI7XHJcbi8vIG5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblxyXG5pbXBvcnQgKiBhcyBHZW9sb2NhdGlvbiAgICAgIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuLy8gTW9tZW50LmpzXHJcbmxldCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ0aGlyZC1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XCJzZWFyY2gtYnV0dG9uXCIgdGV4dD1cIlNlYXJjaFwiICh0YXApPVwic2VhcmNoKClcIj48L0J1dHRvbj5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cInt7IGZvdW5kQ2l0eSB9fVwiPjwvTGFiZWw+XHJcbiAgICAgICAgPHdlYXRoZXItbGlzdC1nZW8+PC93ZWF0aGVyLWxpc3QtZ2VvPlxyXG5gLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9maXJzdC1wYWdlL2ZpcnN0LXBhZ2UuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbV2VhdGhlclNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGlyZFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgLy8gcHVibGljIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICAvLyBwdWJsaWMgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICAvLyBwcml2YXRlIGZvdW5kQ2l0eTogc3RyaW5nID0gJyc7XHJcbiAgICAvLyBwcml2YXRlIGRhdGE6IGFueSA9IHt9O1xyXG4gICAgLy9cclxuICAgIC8vIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHtcclxuICAgIC8vICAgICB0aGlzLmxhdGl0dWRlID0gMDtcclxuICAgIC8vICAgICB0aGlzLmxvbmdpdHVkZSA9IDA7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gbmdPbkluaXQoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5nZXREZXZpY2VMb2NhdGlvbigpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5sYXRpdHVkZSA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMubGF0aXR1ZGUsIHRoaXMubG9uZ2l0dWRlKTtcclxuICAgIC8vICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIHByaXZhdGUgZ2V0RGV2aWNlTG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBHZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7dGltZW91dDogMTAwMDB9KS50aGVuKGxvY2F0aW9uID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2F0aW9uKTtcclxuICAgIC8vICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIHNldFBvc2l0aW9uKGxhdCwgbG9uZyl7XHJcbiAgICAvLyAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2Uuc2VhcmNoQ2l0eUJ5R0VPQ29vcmRzKGxhdCwgbG9uZylcclxuICAgIC8vICAgICAgICAgLnN1YnNjcmliZShcclxuICAgIC8vICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuZm91bmRDaXR5ID0gZGF0YVsxXS5uYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJEYXRhKHRoaXMuZm91bmRDaXR5KVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnbGF0aXR1ZGUgJyArIGxhdCArICcgbG9uZ2l0dWRlICcgKyBsb25nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICApO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIHNlYXJjaCgpIHtcclxuICAgIC8vICAgICBjb25zdCB3ZWF0aGVySXRlbUdFTyA9IG5ldyBXZWF0aGVySXRlbUdFTyh0aGlzLmRhdGEubG9jYXRpb24ubmFtZSwgdGhpcy5kYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsIG1vbWVudCh0aGlzLmRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQpLmZvcm1hdCgnSEg6bW0nKSwgdGhpcy5kYXRhLmxvY2F0aW9uLnR6X2lkLFxyXG4gICAgLy8gICAgICAgICB0aGlzLmRhdGEuY3VycmVudC50ZW1wX2MsIHRoaXMuZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLCB0aGlzLmRhdGEuY3VycmVudC53aW5kX21waCwgdGhpcy5kYXRhLmN1cnJlbnQud2luZF9kZWdyZWUsIHRoaXMuZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxyXG4gICAgLy8gICAgICAgICB0aGlzLmRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiwgdGhpcy5kYXRhLmxvY2F0aW9uLmNvdW50cnksIHRoaXMuZGF0YS5sb2NhdGlvbi5sYXQsIHRoaXMuZGF0YS5sb2NhdGlvbi5sb24sIHRoaXMuZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLnN1YnN0cmluZygzMCkpO1xyXG4gICAgLy8gICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmFkZFdlYXRoZXJJdGVtQnlHRU8od2VhdGhlckl0ZW1HRU8pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIEBJbnB1dCgnbGF0JykgbGF0aXR1ZGU6IGFueTtcclxuICAgIEBJbnB1dCgnbG9uZycpIGxvbmdpdHVkZTogYW55O1xyXG5cclxuICAgIHByaXZhdGUgZm91bmRDaXR5OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSl7fVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmKHRoaXMubGF0aXR1ZGUgPT09IDAgJiYgdGhpcy5sb25naXR1ZGUgPT09IDApIHtcclxuICAgICAgICAgICAgYWxlcnQoJ2Vycm9yIGluIHNlYXJjaCB5b3VyIHBvc2l0aW9uIScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaENpdHlCeUdFT0Nvb3Jkcyh0aGlzLmxhdGl0dWRlLCB0aGlzLmxvbmdpdHVkZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvdW5kQ2l0eSA9ICdUZXN0JztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19