import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateParametersAsync_ArrayRecursive = (): Promise<void> => _test_functional_validateParametersAsync(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.validateParameters(p),
)