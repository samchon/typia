import * as tr from "class-transformer";
import * as cv from "class-validator";

import { CvTimestamp } from "./CvTimestamp";

export class CvObjectRecursive {
    @cv.IsOptional()
    @cv.ValidateNested({ each: true })
    @tr.Type(() => CvObjectRecursive)
    public parent!: CvObjectRecursive | null;

    @cv.IsNumber()
    public id!: number;

    @cv.IsString()
    public code!: string;

    @cv.IsString()
    public name!: string;

    @cv.IsNumber()
    public sequence!: number;

    @cv.ValidateNested()
    @tr.Type(() => CvTimestamp)
    public created_at!: CvTimestamp;
}
