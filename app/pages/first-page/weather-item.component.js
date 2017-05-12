"use strict";
var core_1 = require("@angular/core");
// Interface
var weather_item_interface_1 = require("../../interfaces/weather-item.interface");
var WeatherItemComponent = (function () {
    function WeatherItemComponent() {
    }
    return WeatherItemComponent;
}());
__decorate([
    core_1.Input('item'),
    __metadata("design:type", weather_item_interface_1.WeatherItem)
], WeatherItemComponent.prototype, "weatherItem", void 0);
WeatherItemComponent = __decorate([
    core_1.Component({
        selector: 'weather-item',
        moduleId: module.id,
        templateUrl: './weather-item.html',
    })
], WeatherItemComponent);
exports.WeatherItemComponent = WeatherItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYXRoZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFpRDtBQUNqRCxZQUFZO0FBQ1osa0ZBQTJFO0FBTzNFLElBQWEsb0JBQW9CO0lBQWpDO0lBRUEsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFEa0I7SUFBZCxZQUFLLENBQUMsTUFBTSxDQUFDOzhCQUFjLG9DQUFXO3lEQUFDO0FBRC9CLG9CQUFvQjtJQUxoQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7S0FDckMsQ0FBQztHQUNXLG9CQUFvQixDQUVoQztBQUZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBJbnRlcmZhY2VcclxuaW1wb3J0IHsgV2VhdGhlckl0ZW0gfSAgICAgIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3dlYXRoZXItaXRlbS5pbnRlcmZhY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWl0ZW0nLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi93ZWF0aGVyLWl0ZW0uaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVySXRlbUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoJ2l0ZW0nKSB3ZWF0aGVySXRlbTogV2VhdGhlckl0ZW07XHJcbn1cclxuIl19