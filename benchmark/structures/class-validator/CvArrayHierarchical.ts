import * as tr from "class-transformer";
import * as cv from "class-validator";

import { CvTimestamp } from "./CvTimestamp";

export class CvArrayHierarchical {
    @cv.IsNumber()
    id!: number;

    @cv.IsNumber()
    serial!: number;

    @cv.IsString()
    name!: string;

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => CvTimestamp)
    established_at!: CvTimestamp;

    @cv.ValidateNested({ each: true })
    @cv.IsArray()
    @cv.IsObject()
    @tr.Type(() => CvDepartment)
    departments!: CvDepartment[];
}

class CvDepartment {
    @cv.IsNumber()
    id!: number;

    @cv.IsString()
    code!: string;

    @cv.IsNumber()
    sales!: number;

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => CvTimestamp)
    created_at!: CvTimestamp;

    @cv.ValidateNested({ each: true })
    @cv.IsArray()
    @cv.IsObject()
    @tr.Type(() => CvEmployee)
    employees!: CvEmployee[];
}

class CvEmployee {
    @cv.IsNumber()
    id!: number;

    @cv.IsString()
    name!: string;

    @cv.IsNumber()
    age!: number;

    @cv.IsNumber()
    grade!: number;

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => CvTimestamp)
    employeed_at!: CvTimestamp;
}
