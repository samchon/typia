import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_isReturn_ArrayMatrix = _test_functional_isReturn(
  "ArrayMatrix",
)(ArrayMatrix)((p: (input: ArrayMatrix) => ArrayMatrix) =>
  typia.functional.isReturn(p),
);
