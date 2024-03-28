import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertFunctionAsync_ClassMethod =
  _test_functional_assertFunctionAsync(TypeGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertFunction(p),
  );
