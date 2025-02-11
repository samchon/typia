import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_equalsParameters_ArrayMatrix = _test_functional_equalsParameters(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => ArrayMatrix) => typia.functional.equalsParameters(p),
)