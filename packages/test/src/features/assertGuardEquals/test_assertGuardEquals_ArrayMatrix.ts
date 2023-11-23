import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertGuardEquals_ArrayMatrix = _test_assertGuardEquals(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input) =>
  typia.assertGuardEquals<ArrayMatrix>(input),
);
