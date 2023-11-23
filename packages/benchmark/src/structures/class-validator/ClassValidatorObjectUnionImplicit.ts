import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ObjectUnionImplicit } from "../../../test/structures/ObjectUnionImplicit";

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
  export const transform = (input: ObjectUnionImplicit) =>
    tr.plainToInstance(ClassValidatorObjectUnionImplicit, input);
  export const validate = (input: ObjectUnionImplicit) =>
    cv.validateSync(transform(input));
}
