import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ArrayHierarchical =
  _test_misc_assertPrune(TypeGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)(
    typia.misc.createAssertPrune<ArrayHierarchical>(),
  );
