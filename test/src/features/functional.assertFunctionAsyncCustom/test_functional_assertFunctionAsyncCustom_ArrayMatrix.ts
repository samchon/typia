import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ArrayMatrix = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)