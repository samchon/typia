import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ArrayHierarchical } from "../../structures/pure/ArrayHierarchical";
import { ClassValidatorTimestamp } from "./ClassValidatorTimestamp";

class Employee {
  @cv.IsNumber()
  id!: number;

  @cv.IsString()
  name!: string;

  @cv.IsNumber()
  age!: number;

  @cv.IsNumber()
  grade!: number;

  @cv.ValidateNested()
  @cv.IsObject()
  @tr.Type(() => ClassValidatorTimestamp)
  employed_at!: ClassValidatorTimestamp;
}

class Department {
  @cv.IsNumber()
  id!: number;

  @cv.IsString()
  code!: string;

  @cv.IsNumber()
  sales!: number;

  @cv.ValidateNested()
  @cv.IsObject()
  @tr.Type(() => ClassValidatorTimestamp)
  created_at!: ClassValidatorTimestamp;

  @tr.Type(() => Employee)
  @cv.IsArray()
  @cv.IsObject({ each: true })
  @cv.ValidateNested({ each: true })
  employees!: Employee[];
}

export class ClassValidatorArrayHierarchical {
  @cv.IsNumber()
  id!: number;

  @cv.IsNumber()
  serial!: number;

  @cv.IsString()
  name!: string;

  @cv.ValidateNested()
  @cv.IsObject()
  @tr.Type(() => ClassValidatorTimestamp)
  established_at!: ClassValidatorTimestamp;

  @tr.Type(() => Department)
  @cv.IsArray()
  @cv.IsObject({ each: true })
  @cv.ValidateNested({ each: true })
  departments!: Department[];
}
export namespace ClassValidatorArrayHierarchical {
  export const transform = (input: ArrayHierarchical) =>
    tr.plainToInstance(ClassValidatorArrayHierarchical, input);
  export const validate = (input: ArrayHierarchical) =>
    transform(input)
      .map((item) => cv.validateSync(item))
      .flat();
}
