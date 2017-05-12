"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var app_component_1 = require("./app.component");
var first_page_component_1 = require("./pages/first-page/first-page.component");
var weater_list_component_1 = require("./pages/first-page/weater-list.component");
var weather_item_component_1 = require("./pages/first-page/weather-item.component");
var second_page_component_1 = require("./pages/second-page/second-page.component");
var weather_list_hourly_component_1 = require("./pages/second-page/weather-list-hourly.component");
var weather_item_hourly_component_1 = require("./pages/second-page/weather-item-hourly.component");
var element_component_1 = require("./pages/second-page/element.component");
var third_page_component_1 = require("./pages/third-page/third-page.component");
var weather_list_geo_component_1 = require("./pages/third-page/weather-list-geo.component");
var weather_item_geo_component_1 = require("./pages/third-page/weather-item-geo.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            first_page_component_1.FirstPageComponent,
            weater_list_component_1.WeatherListComponent,
            weather_item_component_1.WeatherItemComponent,
            second_page_component_1.SecondPageComponent,
            weather_list_hourly_component_1.WeatherListHourlyComponent,
            weather_item_hourly_component_1.WeatherItemHourlyComponent,
            element_component_1.ElementComponent,
            third_page_component_1.ThirdPageComponent,
            weather_list_geo_component_1.WeatherListGeoComponent,
            weather_item_geo_component_1.WeatherItemGeoComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUUzRCxnRkFBc0Y7QUFDdEYsb0RBQXdFO0FBQ3hFLGtEQUF1RTtBQUV2RSxpREFBNkQ7QUFFN0QsZ0ZBQXFGO0FBQ3JGLGtGQUFzRjtBQUN0RixvRkFBdUY7QUFDdkYsbUZBQXVGO0FBQ3ZGLG1HQUErRjtBQUMvRixtR0FBK0Y7QUFDL0YsMkVBQW1GO0FBQ25GLGdGQUFxRjtBQUNyRiw0RkFBMkY7QUFDM0YsNEZBQTJGO0FBOEIzRixJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUE1QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDZCQUFzQjtTQUN6QjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1oseUNBQWtCO1lBQ2xCLDRDQUFvQjtZQUNwQiw2Q0FBb0I7WUFFcEIsMkNBQW1CO1lBQ25CLDBEQUEwQjtZQUMxQiwwREFBMEI7WUFDMUIsb0NBQWdCO1lBRWhCLHlDQUFrQjtZQUNsQixvREFBdUI7WUFDdkIsb0RBQXVCO1NBQzFCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSAgICAgICAgIGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9ICAgIGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9ICAgICBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgICAgICAgICAgICAgIGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgRmlyc3RQYWdlQ29tcG9uZW50IH0gICAgICAgICBmcm9tIFwiLi9wYWdlcy9maXJzdC1wYWdlL2ZpcnN0LXBhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXZWF0aGVyTGlzdENvbXBvbmVudCB9ICAgICAgIGZyb20gXCIuL3BhZ2VzL2ZpcnN0LXBhZ2Uvd2VhdGVyLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXZWF0aGVySXRlbUNvbXBvbmVudCB9ICAgICAgIGZyb20gXCIuL3BhZ2VzL2ZpcnN0LXBhZ2Uvd2VhdGhlci1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2Vjb25kUGFnZUNvbXBvbmVudCB9ICAgICAgICBmcm9tIFwiLi9wYWdlcy9zZWNvbmQtcGFnZS9zZWNvbmQtcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdlYXRoZXJMaXN0SG91cmx5Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc2Vjb25kLXBhZ2Uvd2VhdGhlci1saXN0LWhvdXJseS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdlYXRoZXJJdGVtSG91cmx5Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc2Vjb25kLXBhZ2Uvd2VhdGhlci1pdGVtLWhvdXJseS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVsZW1lbnRDb21wb25lbnQgfSAgICAgICAgICAgZnJvbSBcIi4vcGFnZXMvc2Vjb25kLXBhZ2UvZWxlbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRoaXJkUGFnZUNvbXBvbmVudCB9ICAgICAgICAgZnJvbSBcIi4vcGFnZXMvdGhpcmQtcGFnZS90aGlyZC1wYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgV2VhdGhlckxpc3RHZW9Db21wb25lbnQgfSAgICBmcm9tIFwiLi9wYWdlcy90aGlyZC1wYWdlL3dlYXRoZXItbGlzdC1nZW8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXZWF0aGVySXRlbUdlb0NvbXBvbmVudCB9ICAgIGZyb20gXCIuL3BhZ2VzL3RoaXJkLXBhZ2Uvd2VhdGhlci1pdGVtLWdlby5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBGaXJzdFBhZ2VDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJMaXN0Q29tcG9uZW50LFxuICAgICAgICBXZWF0aGVySXRlbUNvbXBvbmVudCxcblxuICAgICAgICBTZWNvbmRQYWdlQ29tcG9uZW50LFxuICAgICAgICBXZWF0aGVyTGlzdEhvdXJseUNvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckl0ZW1Ib3VybHlDb21wb25lbnQsXG4gICAgICAgIEVsZW1lbnRDb21wb25lbnQsXG5cbiAgICAgICAgVGhpcmRQYWdlQ29tcG9uZW50LFxuICAgICAgICBXZWF0aGVyTGlzdEdlb0NvbXBvbmVudCxcbiAgICAgICAgV2VhdGhlckl0ZW1HZW9Db21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19