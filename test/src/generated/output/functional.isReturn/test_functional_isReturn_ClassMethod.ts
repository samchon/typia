import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ClassMethod } from "../../../structures/ClassMethod";
export const test_functional_isReturn_ClassMethod = _test_functional_isReturn(
  "ClassMethod",
)(ClassMethod)(
  (p: (input: ClassMethod) => ClassMethod) =>
    (input: ClassMethod): ClassMethod | null => {
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
