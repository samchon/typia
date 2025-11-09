import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateEqualsReturnAsync_ArrayMatrix = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.validateEqualsReturn(p),
)