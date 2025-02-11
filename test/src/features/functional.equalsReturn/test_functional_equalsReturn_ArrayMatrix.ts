import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_equalsReturn_ArrayMatrix = _test_functional_equalsReturn(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => ArrayMatrix) => typia.functional.equalsReturn(p),
)