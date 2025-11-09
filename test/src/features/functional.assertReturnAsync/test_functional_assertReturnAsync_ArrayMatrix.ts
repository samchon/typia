import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayMatrix = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.assertReturn(p),
)