import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ClassMethod = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)