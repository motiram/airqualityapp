import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/City';
import { LatestMeasure, LatestResults } from 'src/app/LatestMeasure';
import { Result } from 'src/app/Results';
import { LatestResults2 } from 'src/app/LatestMeasure2';

import { AQServiceService } from 'src/app/services/aqservice.service';
import { catchError, pipe } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private aqService: AQServiceService) {}

  cities: City[] = [];
  selectedCity : string = "";
  selectedCity2 : string = "";
  latestResults: LatestResults;
  latestResults2: LatestResults2;
  errorMsg:string = null;

  ngOnInit(): void {
    this.aqService.getCities().subscribe((results: { results: City[]; }) => (this.cities = results.results), 
      (err)=>{this.errorMsg=err.message; console.log("Error Msg:"+err.errorMsg)});
    console.log(this.cities);
  }
  
  onChange():void {
    this.aqService.getLatestMeasurements(this.selectedCity).subscribe((results: LatestResults) => (this.latestResults = results),  
      (err)=>{this.errorMsg=err.message; console.log("Error Msg:"+err.errorMsg)});
    console.log(this.latestResults);
    console.log(this.selectedCity);
  }
  onChange2():void {
    this.aqService.getLatestMeasurements2(this.selectedCity2).subscribe((results: LatestResults2) => (this.latestResults2 = results),
      (err)=>{this.errorMsg=err.message; console.log("Error Msg:"+err.errorMsg)});
    console.log(this.latestResults);
    console.log(this.selectedCity2);
  }
}
