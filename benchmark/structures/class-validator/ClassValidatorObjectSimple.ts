import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

export class ClassValidatorObjectSimple {
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectSimple.Point3D)
    public scale!: ClassValidatorObjectSimple.Point3D;

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectSimple.Point3D)
    public position!: ClassValidatorObjectSimple.Point3D;

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectSimple.Point3D)
    public rotate!: ClassValidatorObjectSimple.Point3D;

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectSimple.Point3D)
    public pivot!: ClassValidatorObjectSimple.Point3D;
}
export namespace ClassValidatorObjectSimple {
    export class Point3D {
        @cv.IsNumber()
        public x!: number;

        @cv.IsNumber()
        public y!: number;

        @cv.IsNumber()
        public z!: number;
    }
}
