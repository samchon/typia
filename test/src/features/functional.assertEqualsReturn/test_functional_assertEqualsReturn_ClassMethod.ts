import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsReturn_ClassMethod =
  _test_functional_assertEqualsReturn(TypeGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => ClassMethod) =>
    typia.functional.assertEqualsReturn(p),
  );
