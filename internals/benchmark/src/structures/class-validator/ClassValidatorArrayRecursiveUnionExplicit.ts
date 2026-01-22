import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ArrayRecursiveUnionExplicit } from "../pure/ArrayRecursiveUnionExplicit";

export class ClassValidatorArrayRecursiveUnionExplicit {
  @cv.IsNumber()
  id!: number;

  @cv.IsString()
  name!: string;

  @cv.IsString()
  path!: string;

  @cv.IsString()
  @cv.IsIn(["directory", "file"])
  type!: string;

  @cv.IsOptional()
  @cv.IsString()
  @cv.IsIn(["jpg", "txt", "zip", "lnk"])
  extension?: string;

  @tr.Type(() => ClassValidatorArrayRecursiveUnionExplicit)
  @cv.IsArray()
  @cv.IsObject({ each: true })
  @cv.ValidateNested({ each: true })
  @cv.IsOptional()
  children?: ClassValidatorArrayRecursiveUnionExplicit[];

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
  @tr.Type(() => ClassValidatorArrayRecursiveUnionExplicit)
  target?: ClassValidatorArrayRecursiveUnionExplicit;
}
export namespace ClassValidatorArrayRecursiveUnionExplicit {
  export const transform = (input: ArrayRecursiveUnionExplicit) =>
    tr.plainToInstance(ClassValidatorArrayRecursiveUnionExplicit, input);
  export const validate = (input: ArrayRecursiveUnionExplicit) =>
    transform(input)
      .map((item) => cv.validateSync(item))
      .flat();
}
