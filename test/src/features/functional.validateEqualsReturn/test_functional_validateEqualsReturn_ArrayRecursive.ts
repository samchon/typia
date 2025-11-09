import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_validateEqualsReturn_ArrayRecursive = (): void => _test_functional_validateEqualsReturn(
  "ArrayRecursive"
)(ArrayRecursive)(
  (p: (input: ArrayRecursive) => ArrayRecursive) => typia.functional.validateEqualsReturn(p),
)