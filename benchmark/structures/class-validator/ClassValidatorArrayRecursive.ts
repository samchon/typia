import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ArrayRecursive } from "../../../test/structures/ArrayRecursive";
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

    @tr.Type(() => ClassValidatorArrayRecursive)
    @cv.IsArray()
    @cv.IsObject({ each: true })
    @cv.ValidateNested({ each: true })
    public children!: ClassValidatorArrayRecursive[];
}
export namespace ClassValidatorArrayRecursive {
    export const transform = (input: ArrayRecursive) =>
        tr.plainToInstance(ClassValidatorArrayRecursive, input);
    export const validate = (input: ArrayRecursive) =>
        cv.validateSync(transform(input));
}
