"use strict";
var core_1 = require("@angular/core");
// Moment.js
var moment = require("moment");
var ElementComponent = (function () {
    function ElementComponent() {
    }
    ElementComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.hourlyDayItems.length; i++) {
            this.hourlyDayItems[i].time = moment(this.hourlyDayItems[i].time).format('HH:mm');
            this.hourlyDayItems[i].condition.icon = this.hourlyDayItems[i].condition.icon.substring(30);
        }
    };
    return ElementComponent;
}());
__decorate([
    core_1.Input('item'),
    __metadata("design:type", Object)
], ElementComponent.prototype, "hourlyDayItems", void 0);
ElementComponent = __decorate([
    core_1.Component({
        selector: 'element',
        moduleId: module.id,
        templateUrl: './element.html'
    })
], ElementComponent);
exports.ElementComponent = ElementComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbGVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlEO0FBQ3pELFlBQVk7QUFDWixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFPL0IsSUFBYSxnQkFBZ0I7SUFBN0I7SUFTQSxDQUFDO0lBTkcsbUNBQVEsR0FBUjtRQUNJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEcsQ0FBQztJQUNMLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBUmtCO0lBQWQsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7d0RBQXFCO0FBRDFCLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxnQkFBZ0I7S0FDaEMsQ0FBQztHQUNXLGdCQUFnQixDQVM1QjtBQVRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIE1vbWVudC5qc1xyXG5sZXQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlbGVtZW50JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZWxlbWVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRWxlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoJ2l0ZW0nKSBob3VybHlEYXlJdGVtczogYW55O1xyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhvdXJseURheUl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG91cmx5RGF5SXRlbXNbaV0udGltZSA9IG1vbWVudCh0aGlzLmhvdXJseURheUl0ZW1zW2ldLnRpbWUpLmZvcm1hdCgnSEg6bW0nKTtcclxuICAgICAgICAgICAgdGhpcy5ob3VybHlEYXlJdGVtc1tpXS5jb25kaXRpb24uaWNvbiA9IHRoaXMuaG91cmx5RGF5SXRlbXNbaV0uY29uZGl0aW9uLmljb24uc3Vic3RyaW5nKDMwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19