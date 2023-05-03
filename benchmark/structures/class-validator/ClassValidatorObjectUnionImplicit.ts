import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

export class ClassValidatorObjectUnionImplicit {
    @cv.IsOptional()
    @cv.IsNumber()
    x?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    y?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    slope?: number;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionImplicit.Point)
    p1?: ClassValidatorObjectUnionImplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionImplicit.Point)
    p2?: ClassValidatorObjectUnionImplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionImplicit.Point)
    p3?: ClassValidatorObjectUnionImplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionImplicit.Point)
    p4?: ClassValidatorObjectUnionImplicit.Point;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionImplicit.Point)
    points?: ClassValidatorObjectUnionImplicit.Point[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionImplicit.Polyline)
    outer?: ClassValidatorObjectUnionImplicit.Polyline;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionImplicit.Polyline)
    inner?: ClassValidatorObjectUnionImplicit.Polyline[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionImplicit.Point)
    point?: ClassValidatorObjectUnionImplicit.Point;

    @cv.IsOptional()
    @cv.IsNumber()
    radius?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    distance?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    width?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    height?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    area?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    length?: number;
}
export namespace ClassValidatorObjectUnionImplicit {
    export class Point {
        @cv.IsNumber()
        x!: number;

        @cv.IsNumber()
        y!: number;
    }

    export class Line {
        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        p1!: Point;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        p2!: Point;
    }

    export class Triangle {
        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        p1!: Point;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        p2!: Point;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        p3!: Point;
    }

    export class Rectangle {
        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        p1!: Point;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        p2!: Point;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        p3!: Point;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        p4!: Point;
    }

    export class Polyline {
        @cv.IsArray()
        @cv.ValidateNested({ each: true })
        @cv.IsObject()
        @tr.Type(() => Point)
        points!: Point[];
    }

    export class Polygon {
        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Polyline)
        outer!: Polyline;

        @cv.IsArray()
        @cv.ValidateNested({ each: true })
        @cv.IsObject()
        @tr.Type(() => Polyline)
        inner!: Polyline[];
    }

    export class Circle {
        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Point)
        centroid!: Point;

        @cv.IsNumber()
        radius!: number;
    }
}
