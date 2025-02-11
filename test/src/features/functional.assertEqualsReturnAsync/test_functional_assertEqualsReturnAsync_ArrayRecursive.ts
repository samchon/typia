import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ArrayRecursive = _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertEqualsReturn(p),
)