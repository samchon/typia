import * as cv from "class-validator";

export class CvTimestamp {
    @cv.IsNumber()
    public time!: number;

    @cv.IsNumber()
    public zone!: number;
}
