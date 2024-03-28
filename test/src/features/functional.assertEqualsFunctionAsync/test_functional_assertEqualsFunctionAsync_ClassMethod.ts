import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsFunctionAsync_ClassMethod =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertEqualsFunction(p),
  );
