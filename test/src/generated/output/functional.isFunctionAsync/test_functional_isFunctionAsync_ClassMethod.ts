import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_functional_isFunctionAsync_ClassMethod =
  _test_functional_isFunctionAsync("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => Promise<ClassMethod>) =>
      async (input: ClassMethod): Promise<ClassMethod | null> => {
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
        const result = await p(input);
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
