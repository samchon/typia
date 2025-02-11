import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_isFunctionAsync_ArrayRecursive = _test_functional_isFunctionAsync(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.isFunction(p),
)