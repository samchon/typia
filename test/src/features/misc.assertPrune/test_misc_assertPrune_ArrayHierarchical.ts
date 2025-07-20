import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_assertPrune_ArrayHierarchical = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.misc.assertPrune<ArrayHierarchical>(input),
  );
