import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ClassValidatorTimestamp } from "./ClassValidatorTimestamp";

export class ClassValidatorArrayHierarchical {
    @cv.IsNumber()
    id!: number;

    @cv.IsNumber()
    serial!: number;

    @cv.IsString()
    name!: string;

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorTimestamp)
    established_at!: ClassValidatorTimestamp;

    @cv.ValidateNested({ each: true })
    @cv.IsArray()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorDepartment)
    departments!: ClassValidatorDepartment[];
}

class ClassValidatorDepartment {
    @cv.IsNumber()
    id!: number;

    @cv.IsString()
    code!: string;

    @cv.IsNumber()
    sales!: number;

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorTimestamp)
    created_at!: ClassValidatorTimestamp;

    @cv.ValidateNested({ each: true })
    @cv.IsArray()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorEmployee)
    employees!: ClassValidatorEmployee[];
}

class ClassValidatorEmployee {
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
    @tr.Type(() => ClassValidatorTimestamp)
    employeed_at!: ClassValidatorTimestamp;
}
