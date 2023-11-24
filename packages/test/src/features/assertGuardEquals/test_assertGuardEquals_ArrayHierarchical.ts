import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertGuardEquals_ArrayHierarchical = _test_assertGuardEquals(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.assertGuardEquals<ArrayHierarchical>(input),
);
