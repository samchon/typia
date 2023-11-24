import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ObjectSimple } from "../../structures/pure/ObjectSimple";

class Point3D {
  @cv.IsNumber()
  public x!: number;

  @cv.IsNumber()
  public y!: number;

  @cv.IsNumber()
  public z!: number;
}

export class ClassValidatorObjectSimple {
  @cv.ValidateNested()
  @cv.IsObject()
  @tr.Type(() => Point3D)
  public scale!: Point3D;

  @cv.ValidateNested()
  @cv.IsObject()
  @tr.Type(() => Point3D)
  public position!: Point3D;

  @cv.ValidateNested()
  @cv.IsObject()
  @tr.Type(() => Point3D)
  public rotate!: Point3D;

  @cv.ValidateNested()
  @cv.IsObject()
  @tr.Type(() => Point3D)
  public pivot!: Point3D;
}
export namespace ClassValidatorObjectSimple {
  export const transform = (input: ObjectSimple) =>
    tr.plainToInstance(ClassValidatorObjectSimple, input);
  export const validate = (input: ObjectSimple) =>
    cv.validateSync(transform(input));
}
