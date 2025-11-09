import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateEqualsFunctionAsync_ArrayRecursive = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.validateEqualsFunction(p),
)