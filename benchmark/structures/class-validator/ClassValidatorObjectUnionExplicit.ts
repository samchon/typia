import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

export class ClassValidatorObjectUnionExplicit {
    @cv.IsString()
    @cv.IsIn([
        "point",
        "line",
        "triangle",
        "rectangle",
        "polyline",
        "polygon",
        "circle",
    ])
    type!: string;

    @cv.IsOptional()
    @cv.IsNumber()
    x?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    y?: number;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionExplicit.Point)
    p1?: ClassValidatorObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionExplicit.Point)
    p2?: ClassValidatorObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionExplicit.Point)
    p3?: ClassValidatorObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionExplicit.Point)
    p4?: ClassValidatorObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionExplicit.Point)
    points?: ClassValidatorObjectUnionExplicit.Point[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionExplicit.Polyline)
    outer?: ClassValidatorObjectUnionExplicit.Polyline;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionExplicit.Polyline)
    inner?: ClassValidatorObjectUnionExplicit.Polyline[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectUnionExplicit.Point)
    point?: ClassValidatorObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.IsNumber()
    radius?: number;
}
export namespace ClassValidatorObjectUnionExplicit {
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
