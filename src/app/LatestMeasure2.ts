import { Measurements } from "./Measurements";
import { Meta } from "./Meta";
import {LatestMeasure} from "./LatestMeasure"

export interface LatestResults2 {
    meta:Meta;
    results:LatestMeasure[];
}