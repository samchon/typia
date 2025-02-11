import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_isParametersAsync_ArrayRecursive = _test_functional_isParametersAsync(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.isParameters(p),
)