"use strict";
var WeatherItemGEO = (function () {
    function WeatherItemGEO(cityName, description, lastUpdated, timeZone, temperature, feelsTemperature, windSpeed, windDeg, humidity, pressure, country, lat, lon, icon) {
        this.cityName = cityName;
        this.description = description;
        this.lastUpdated = lastUpdated;
        this.timeZone = timeZone;
        this.temperature = temperature;
        this.feelsTemperature = feelsTemperature;
        this.windSpeed = windSpeed;
        this.windDeg = windDeg;
        this.humidity = humidity;
        this.pressure = pressure;
        this.country = country;
        this.lat = lat;
        this.lon = lon;
        this.icon = icon;
    }
    return WeatherItemGEO;
}());
exports.WeatherItemGEO = WeatherItemGEO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1pdGVtLWdlby5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWF0aGVyLWl0ZW0tZ2VvLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFDRSx3QkFDUyxRQUFnQixFQUNoQixXQUFtQixFQUNuQixXQUFtQixFQUNuQixRQUFnQixFQUNoQixXQUFtQixFQUNuQixnQkFBd0IsRUFDeEIsU0FBaUIsRUFDakIsT0FBZSxFQUNmLFFBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLE9BQWUsRUFDZixHQUFXLEVBQ1gsR0FBVyxFQUNYLElBQVk7UUFiWixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQ25CLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2VhdGhlckl0ZW1HRU8ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY2l0eU5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgbGFzdFVwZGF0ZWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgdGltZVpvbmU6IHN0cmluZyxcbiAgICBwdWJsaWMgdGVtcGVyYXR1cmU6IG51bWJlcixcbiAgICBwdWJsaWMgZmVlbHNUZW1wZXJhdHVyZTogbnVtYmVyLFxuICAgIHB1YmxpYyB3aW5kU3BlZWQ6IG51bWJlcixcbiAgICBwdWJsaWMgd2luZERlZzogbnVtYmVyLFxuICAgIHB1YmxpYyBodW1pZGl0eTogbnVtYmVyLFxuICAgIHB1YmxpYyBwcmVzc3VyZTogbnVtYmVyLFxuICAgIHB1YmxpYyBjb3VudHJ5OiBzdHJpbmcsXG4gICAgcHVibGljIGxhdDogbnVtYmVyLFxuICAgIHB1YmxpYyBsb246IG51bWJlcixcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nXG4gICl7fVxufVxuIl19