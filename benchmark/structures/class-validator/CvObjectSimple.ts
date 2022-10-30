import * as tr from "class-transformer";
import * as cv from "class-validator";

export class CvObjectSimple {
    @cv.ValidateNested()
    @tr.Type(() => CvObjectSimple.Point3D)
    public scale!: CvObjectSimple.Point3D;

    @cv.ValidateNested()
    @tr.Type(() => CvObjectSimple.Point3D)
    public position!: CvObjectSimple.Point3D;

    @cv.ValidateNested()
    @tr.Type(() => CvObjectSimple.Point3D)
    public rotate!: CvObjectSimple.Point3D;

    @cv.ValidateNested()
    @tr.Type(() => CvObjectSimple.Point3D)
    public pivot!: CvObjectSimple.Point3D;
}
export namespace CvObjectSimple {
    export class Point3D {
        @cv.IsNumber()
        public x!: number;

        @cv.IsNumber()
        public y!: number;

        @cv.IsNumber()
        public z!: number;
    }
}
