import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_equalsFunction_ArrayMatrix = (): void => _test_functional_equalsFunction(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => ArrayMatrix) => typia.functional.equalsFunction(p),
)