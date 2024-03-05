import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_functional_isFunction_ClassMethod =
  _test_functional_isFunction("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      (input: ClassMethod): ClassMethod | null => {
        if (
          false ===
          ((input: any): input is ClassMethod.Animal => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).name &&
              "number" === typeof (input as any).age &&
              Number.isFinite((input as any).age)
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ClassMethod.Animal => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).name &&
            "number" === typeof (input as any).age &&
            Number.isFinite((input as any).age)
          );
        })(result)
          ? result
          : null;
      },
  );
