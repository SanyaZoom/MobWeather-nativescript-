import { Component, OnInit } from "@angular/core";
// nativescript-geolocation
import * as Geolocation      from "nativescript-geolocation";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    public latitude: number;
    public longitude: number;

    public constructor() {
        this.latitude = 0;
        this.longitude = 0;
    }

    private getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            Geolocation.enableLocationRequest().then(() => {
                Geolocation.getCurrentLocation({timeout: 10000}).then(location => {
                    resolve(location);
                }).catch(error => {
                    reject(error);
                });
            });
        });
    }

    ngOnInit() {
        this.getDeviceLocation().then(result => {
            this.latitude = result.latitude;
            this.longitude = result.longitude;
        }, error => {
            console.error(error);
        });
    }
}
