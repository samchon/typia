import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertFunctionAsyncCustom_ClassMethod =
  _test_functional_assertFunctionAsync(CustomGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
