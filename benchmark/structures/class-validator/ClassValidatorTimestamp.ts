import * as cv from "class-validator";
import "reflect-metadata";

export class ClassValidatorTimestamp {
    @cv.IsNumber()
    public time!: number;

    @cv.IsNumber()
    public zone!: number;
}
