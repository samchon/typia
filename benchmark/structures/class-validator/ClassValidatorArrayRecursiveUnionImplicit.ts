import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ArrayRecursiveUnionImplicit } from "../../../test/structures/ArrayRecursiveUnionImplicit";

export class ClassValidatorArrayRecursiveUnionImplicit {
  @cv.IsNumber()
  id!: number;

  @cv.IsString()
  name!: string;

  @cv.IsString()
  path!: string;

  @tr.Type(() => ClassValidatorArrayRecursiveUnionImplicit)
  @cv.IsArray()
  @cv.IsObject({ each: true })
  @cv.ValidateNested({ each: true })
  @cv.IsOptional()
  children?: ClassValidatorArrayRecursiveUnionImplicit[];

  @cv.IsOptional()
  @cv.IsNumber()
  width?: number;

  @cv.IsOptional()
  @cv.IsNumber()
  height?: number;

  @cv.IsOptional()
  @cv.IsString()
  url?: string;

  @cv.IsOptional()
  @cv.IsNumber()
  size?: number;

  @cv.IsOptional()
  @cv.IsString()
  content?: string;

  @cv.IsOptional()
  @cv.IsNumber()
  count?: number;

  @cv.IsOptional()
  @cv.ValidateNested()
  @cv.IsObject()
  @tr.Type(() => ClassValidatorArrayRecursiveUnionImplicit)
  target?: ClassValidatorArrayRecursiveUnionImplicit;

  @cv.IsOptional()
  @cv.IsString()
  @cv.IsIn(["read", "write"])
  access?: string;
}
export namespace ClassValidatorArrayRecursiveUnionImplicit {
  export const transform = (input: ArrayRecursiveUnionImplicit) =>
    tr.plainToInstance(ClassValidatorArrayRecursiveUnionImplicit, input);
  export const validate = (input: ArrayRecursiveUnionImplicit) =>
    transform(input)
      .map((item) => cv.validateSync(item))
      .flat();
}
