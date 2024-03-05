import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_functional_isParameters_ClassMethod =
  _test_functional_isParameters("ClassMethod")(ClassMethod)(
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
        return p(input);
      },
  );
