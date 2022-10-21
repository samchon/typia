import * as tr from "class-transformer";
import * as cv from "class-validator";

export class CvObjectUnionImplicit {
    @cv.IsOptional()
    @cv.IsNumber()
    x?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    y?: number;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionImplicit.Point)
    p1?: CvObjectUnionImplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionImplicit.Point)
    p2?: CvObjectUnionImplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionImplicit.Point)
    p3?: CvObjectUnionImplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionImplicit.Point)
    p4?: CvObjectUnionImplicit.Point;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @tr.Type(() => CvObjectUnionImplicit.Point)
    points?: CvObjectUnionImplicit.Point[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionImplicit.Polyline)
    outer?: CvObjectUnionImplicit.Polyline;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @tr.Type(() => CvObjectUnionImplicit.Polyline)
    inner?: CvObjectUnionImplicit.Polyline[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionImplicit.Point)
    point?: CvObjectUnionImplicit.Point;

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
export namespace CvObjectUnionImplicit {
    export class Point {
        @cv.IsNumber()
        x!: number;

        @cv.IsNumber()
        y!: number;
    }

    export class Line {
        @cv.ValidateNested()
        @tr.Type(() => Point)
        p1!: Point;

        @cv.ValidateNested()
        @tr.Type(() => Point)
        p2!: Point;
    }

    export class Triangle {
        @cv.ValidateNested()
        @tr.Type(() => Point)
        p1!: Point;

        @cv.ValidateNested()
        @tr.Type(() => Point)
        p2!: Point;

        @cv.ValidateNested()
        @tr.Type(() => Point)
        p3!: Point;
    }

    export class Rectangle {
        @cv.ValidateNested()
        @tr.Type(() => Point)
        p1!: Point;

        @cv.ValidateNested()
        @tr.Type(() => Point)
        p2!: Point;

        @cv.ValidateNested()
        @tr.Type(() => Point)
        p3!: Point;

        @cv.ValidateNested()
        @tr.Type(() => Point)
        p4!: Point;
    }

    export class Polyline {
        @cv.IsArray()
        @cv.ValidateNested({ each: true })
        @tr.Type(() => Point)
        points!: Point[];
    }

    export class Polygon {
        @cv.ValidateNested()
        @tr.Type(() => Polyline)
        outer!: Polyline;

        @cv.IsArray()
        @cv.ValidateNested({ each: true })
        @tr.Type(() => Polyline)
        inner!: Polyline[];
    }

    export class Circle {
        @cv.ValidateNested()
        @tr.Type(() => Point)
        centroid!: Point;

        @cv.IsNumber()
        radius!: number;
    }
}
