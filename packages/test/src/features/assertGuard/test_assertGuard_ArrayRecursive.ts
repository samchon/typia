import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertGuard_ArrayRecursive = _test_assertGuard(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)((input) =>
  typia.assertGuard<ArrayRecursive>(input),
);
