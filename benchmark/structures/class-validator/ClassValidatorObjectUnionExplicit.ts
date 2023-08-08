import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ObjectUnionExplicit } from "../../../test/structures/ObjectUnionExplicit";

class Point {
    @cv.IsNumber()
    x!: number;

    @cv.IsNumber()
    y!: number;
}

class Polyline {
    @tr.Type(() => Point)
    @cv.IsArray()
    @cv.IsObject({ each: true })
    @cv.ValidateNested({ each: true })
    points!: Point[];
}

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
    @tr.Type(() => Point)
    p1?: Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => Point)
    p2?: Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => Point)
    p3?: Point;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => Point)
    p4?: Point;

    @tr.Type(() => Point)
    @cv.IsArray()
    @cv.IsObject({ each: true })
    @cv.ValidateNested({ each: true })
    @cv.IsOptional()
    points?: Point[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => Polyline)
    outer?: Polyline;

    @tr.Type(() => Polyline)
    @cv.IsArray()
    @cv.IsObject({ each: true })
    @cv.ValidateNested({ each: true })
    @cv.IsOptional()
    inner?: Polyline[];

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => Point)
    centroid?: Point;

    @cv.IsOptional()
    @cv.IsNumber()
    radius?: number;
}

export namespace ClassValidatorObjectUnionExplicit {
    export const transform = (input: ObjectUnionExplicit) =>
        tr.plainToInstance(ClassValidatorObjectUnionExplicit, input);
    export const validate = (input: ObjectUnionExplicit) =>
        cv.validateSync(transform(input));
}
