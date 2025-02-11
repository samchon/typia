import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ArrayMatrix = _test_functional_assertParametersAsync(TypeGuardError)(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.assertParameters(p),
)