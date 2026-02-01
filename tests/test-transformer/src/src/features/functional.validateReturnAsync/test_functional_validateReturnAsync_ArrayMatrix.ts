import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateReturnAsync_ArrayMatrix = (): Promise<void> => _test_functional_validateReturnAsync(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.validateReturn(p),
)