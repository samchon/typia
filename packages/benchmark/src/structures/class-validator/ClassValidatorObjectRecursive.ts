import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ObjectRecursive } from "../../structures/pure/ObjectRecursive";
import { ClassValidatorTimestamp } from "./ClassValidatorTimestamp";

export class ClassValidatorObjectRecursive {
  @cv.IsOptional()
  @cv.ValidateNested({ each: true })
  @cv.IsObject()
  @tr.Type(() => ClassValidatorObjectRecursive)
  public parent!: ClassValidatorObjectRecursive | null;

  @cv.IsNumber()
  public id!: number;

  @cv.IsString()
  public code!: string;

  @cv.IsString()
  public name!: string;

  @cv.IsNumber()
  public sequence!: number;

  @cv.ValidateNested()
  @cv.IsObject()
  @tr.Type(() => ClassValidatorTimestamp)
  public created_at!: ClassValidatorTimestamp;
}
export namespace ClassValidatorObjectRecursive {
  export const transform = (input: ObjectRecursive) =>
    tr.plainToInstance(ClassValidatorObjectRecursive, input);
  export const validate = (input: ObjectRecursive) =>
    cv.validateSync(transform(input));
}
