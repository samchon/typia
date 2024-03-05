import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_misc_isClone_ClassMethod = _test_misc_isClone(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
  ((input: any): import("typia").Resolved<ClassMethod> | null => {
    const is = (input: any): input is ClassMethod => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).name &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    const clone = (
      input: ClassMethod,
    ): import("typia").Resolved<ClassMethod> => {
      const $co0 = (input: any): any => ({
        name: input.name as any,
        age: input.age as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
