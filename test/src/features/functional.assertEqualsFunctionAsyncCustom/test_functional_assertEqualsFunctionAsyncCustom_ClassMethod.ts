import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsFunctionAsyncCustom_ClassMethod =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
