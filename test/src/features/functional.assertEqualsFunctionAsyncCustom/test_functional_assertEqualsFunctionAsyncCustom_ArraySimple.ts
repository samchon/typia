import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ArraySimple = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)