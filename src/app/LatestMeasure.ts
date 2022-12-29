import { Measurements } from "./Measurements";
import { Meta } from "./Meta";

export interface LatestMeasure {
    country: string;
    city: string;
    location:string; 
    coordinates:Coordinates;
    measurements :Measurements[];
}

export interface LatestResults {
    meta:Meta;
    results:LatestMeasure[];
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}
