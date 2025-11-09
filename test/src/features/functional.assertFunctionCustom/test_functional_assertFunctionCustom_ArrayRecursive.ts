import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArrayRecursive = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => ArrayRecursive) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)