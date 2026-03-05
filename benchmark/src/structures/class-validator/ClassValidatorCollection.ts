import * as tr from "class-transformer";
import * as cv from "class-validator";

export const ClassValidatorCollection = ($class: any) => {
  class Collection {
    @tr.Type(() => $class)
    @cv.IsArray()
    @cv.IsObject({ each: true })
    @cv.ValidateNested({ each: true })
    data!: any;
  }
  return Collection;
};
