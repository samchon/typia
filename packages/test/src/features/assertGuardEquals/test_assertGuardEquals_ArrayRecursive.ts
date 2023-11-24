import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertGuardEquals_ArrayRecursive = _test_assertGuardEquals(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)((input) =>
  typia.assertGuardEquals<ArrayRecursive>(input),
);
