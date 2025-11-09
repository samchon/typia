import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ArrayRecursive = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertFunction(p),
)