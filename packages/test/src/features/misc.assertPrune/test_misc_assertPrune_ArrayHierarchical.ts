import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_assertPrune_ArrayHierarchical = _test_misc_assertPrune(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.misc.assertPrune<ArrayHierarchical>(input),
);
