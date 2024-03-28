import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_functional_isReturnAsync_ClassMethod =
  _test_functional_isReturnAsync("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => Promise<ClassMethod>) =>
      async (input: ClassMethod): Promise<ClassMethod | null> => {
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
