import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_isParametersAsync_ArrayMatrix = _test_functional_isParametersAsync(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.isParameters(p),
)