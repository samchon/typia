import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_equalsFunctionAsync_ArrayRecursive = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.equalsFunction(p),
)