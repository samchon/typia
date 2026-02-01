import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_isFunctionAsync_ArrayMatrix = (): Promise<void> => _test_functional_isFunctionAsync(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.isFunction(p),
)