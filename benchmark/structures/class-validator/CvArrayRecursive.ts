import * as tr from "class-transformer";
import * as cv from "class-validator";

import { CvTimestamp } from "./CvTimestamp";

export class CvArrayRecursive {
    @cv.IsNumber()
    public id!: number;

    @cv.IsString()
    public code!: string;

    @cv.IsNumber()
    public sequence!: number;

    @cv.ValidateNested({ each: true })
    @cv.IsObject()
    @tr.Type(() => CvTimestamp)
    public created_at!: CvTimestamp;

    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @cv.IsObject()
    @tr.Type(() => CvArrayRecursive)
    public children!: CvArrayRecursive[];
}
