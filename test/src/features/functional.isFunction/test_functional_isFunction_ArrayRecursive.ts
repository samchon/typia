import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_isFunction_ArrayRecursive = (): void => _test_functional_isFunction(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => ArrayRecursive) => typia.functional.isFunction(p),
)