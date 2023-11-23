import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_createAssertPrune_ArrayHierarchical =
  _test_misc_assertPrune("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )(typia.misc.createAssertPrune<ArrayHierarchical>());
