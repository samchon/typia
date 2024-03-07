import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ClassMethod } from "../../../structures/ClassMethod";
export const test_functional_isParametersAsync_ClassMethod =
  _test_functional_isParametersAsync("ClassMethod")(ClassMethod)(
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
        return p(input);
      },
  );
