import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsFunction_ClassMethod =
  _test_functional_assertEqualsFunction(TypeGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => ClassMethod) =>
    typia.functional.assertEqualsFunction(p),
  );
