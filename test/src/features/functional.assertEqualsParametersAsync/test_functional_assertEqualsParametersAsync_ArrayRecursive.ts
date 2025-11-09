import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ArrayRecursive = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertEqualsParameters(p),
)