import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Result } from '../Results';
import { LatestMeasure, LatestResults } from '../LatestMeasure';
import { LatestResults2 } from '../LatestMeasure2';



@Injectable({
  providedIn: 'root'
})
export class AQServiceService {

  constructor(private http:HttpClient ) { }

  private getCitiesUrl = "https://api.openaq.org/v2/cities?limit=10000&page=1&offset=0&sort=asc&order_by=city";
  private getLatestMeasurementsUrl = "https://api.openaq.org/v2/latest?limit=100&page=1&offset=0&sort=desc&radius=1000&order_by=lastUpdated&dumpRaw=false";
  private getLatestMeasurementsUrl2 = "https://api.openaq.org/v2/latest?limit=100&page=1&offset=0&sort=desc&radius=1000&order_by=lastUpdated&dumpRaw=false";

  getCities(): Observable<Result> {
    return this.http.get<Result>(this.getCitiesUrl);
  }

  getLatestMeasurements(selectedCity:string): Observable<LatestResults>{
    //use selectedCity as Richmond
    const url = this.getLatestMeasurementsUrl+"&city="+selectedCity;
    console.log("URL:"+url);
    return this.http.get<LatestResults>(url);
  }


  getLatestMeasurements2(selectedCity2:string): Observable<LatestResults2>{
    //use selectedCity as Richmond
    const url2 = this.getLatestMeasurementsUrl2+"&city="+selectedCity2;
    console.log("URL:"+url2);
    return this.http.get<LatestResults2>(url2);
  }

}
