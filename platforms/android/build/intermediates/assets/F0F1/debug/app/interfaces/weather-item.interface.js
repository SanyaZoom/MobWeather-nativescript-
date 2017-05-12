"use strict";
var WeatherItem = (function () {
    function WeatherItem(cityName, description, lastUpdated, timeZone, temperature, feelsTemperature, windSpeed, windDeg, humidity, pressure, country, lat, lon, icon) {
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
    return WeatherItem;
}());
exports.WeatherItem = WeatherItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1pdGVtLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYXRoZXItaXRlbS5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0UscUJBQ1MsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsZ0JBQXdCLEVBQ3hCLFNBQWlCLEVBQ2pCLE9BQWUsRUFDZixRQUFnQixFQUNoQixRQUFnQixFQUNoQixPQUFlLEVBQ2YsR0FBVyxFQUNYLEdBQVcsRUFDWCxJQUFZO1FBYlosYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNuQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdlYXRoZXJJdGVtIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNpdHlOYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGxhc3RVcGRhdGVkOiBzdHJpbmcsXG4gICAgcHVibGljIHRpbWVab25lOiBzdHJpbmcsXG4gICAgcHVibGljIHRlbXBlcmF0dXJlOiBudW1iZXIsXG4gICAgcHVibGljIGZlZWxzVGVtcGVyYXR1cmU6IG51bWJlcixcbiAgICBwdWJsaWMgd2luZFNwZWVkOiBudW1iZXIsXG4gICAgcHVibGljIHdpbmREZWc6IG51bWJlcixcbiAgICBwdWJsaWMgaHVtaWRpdHk6IG51bWJlcixcbiAgICBwdWJsaWMgcHJlc3N1cmU6IG51bWJlcixcbiAgICBwdWJsaWMgY291bnRyeTogc3RyaW5nLFxuICAgIHB1YmxpYyBsYXQ6IG51bWJlcixcbiAgICBwdWJsaWMgbG9uOiBudW1iZXIsXG4gICAgcHVibGljIGljb246IHN0cmluZ1xuICApe31cbn1cbiJdfQ==