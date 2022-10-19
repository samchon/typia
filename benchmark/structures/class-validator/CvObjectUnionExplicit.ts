import * as tr from "class-transformer";
import * as cv from "class-validator";

export class CvObjectUnionExplicit {
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
    @tr.Type(() => CvObjectUnionExplicit.Point)
    p1?: CvObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionExplicit.Point)
    p2?: CvObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionExplicit.Point)
    p3?: CvObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionExplicit.Point)
    p4?: CvObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @tr.Type(() => CvObjectUnionExplicit.Point)
    points?: CvObjectUnionExplicit.Point[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionExplicit.Polyline)
    outer?: CvObjectUnionExplicit.Polyline;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @tr.Type(() => CvObjectUnionExplicit.Polyline)
    inner?: CvObjectUnionExplicit.Polyline[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectUnionExplicit.Point)
    point?: CvObjectUnionExplicit.Point;

    @cv.IsOptional()
    @cv.IsNumber()
    radius?: number;
}
export namespace CvObjectUnionExplicit {
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
