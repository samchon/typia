import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_isParameters_ArrayMatrix = _test_functional_isParameters(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => ArrayMatrix) => typia.functional.isParameters(p),
)