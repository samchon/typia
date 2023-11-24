import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ArraySimple } from "../../structures/pure/ArraySimple";

class Hobby {
  @cv.IsString()
  name!: string;

  @cv.IsNumber()
  rank!: number;

  @cv.IsString()
  body!: string;
}

export class ClassValidatorArraySimple {
  @cv.IsString()
  name!: string;

  @cv.IsString()
  email!: string;

  @tr.Type(() => Hobby)
  @cv.IsArray()
  @cv.IsObject({ each: true })
  @cv.ValidateNested({ each: true })
  hobbies!: Hobby[];
}
export namespace ClassValidatorArraySimple {
  export const transform = (input: ArraySimple) =>
    input.map((i) => tr.plainToInstance(ClassValidatorArraySimple, i));
  export const validate = (input: ArraySimple) =>
    transform(input)
      .map((item) => cv.validateSync(item))
      .flat();
}
