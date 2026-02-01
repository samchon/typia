import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_equalsFunction_ArrayRecursive = (): void => _test_functional_equalsFunction(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => ArrayRecursive) => typia.functional.equalsFunction(p),
)