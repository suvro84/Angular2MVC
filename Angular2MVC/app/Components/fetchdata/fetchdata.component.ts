import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    //template: require('app/Components/fetchdata/fetchdata.component.html')
    templateUrl: 'app/Components/fetchdata/fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];

    constructor(http: Http) {
       // api / userapi /
        http.get('api/SampleDataService/WeatherForecasts').subscribe(result => {
            debugger;
            alert(result.json());
            alert(this.forecasts);
            this.forecasts = result.json();
            
        });
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
