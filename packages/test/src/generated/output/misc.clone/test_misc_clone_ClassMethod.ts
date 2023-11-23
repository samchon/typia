import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_misc_clone_ClassMethod = _test_misc_clone(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
  ((input: ClassMethod): typia.Resolved<ClassMethod> => {
    const $co0 = (input: any): any => ({
      name: input.name as any,
      age: input.age as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
