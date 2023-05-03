import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ClassValidatorTimestamp } from "./ClassValidatorTimestamp";

export class ClassValidatorArrayRecursive {
    @cv.IsNumber()
    public id!: number;

    @cv.IsString()
    public code!: string;

    @cv.IsNumber()
    public sequence!: number;

    @cv.ValidateNested({ each: true })
    @cv.IsObject()
    @tr.Type(() => ClassValidatorTimestamp)
    public created_at!: ClassValidatorTimestamp;

    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @cv.IsObject()
    @tr.Type(() => ClassValidatorArrayRecursive)
    public children!: ClassValidatorArrayRecursive[];
}
