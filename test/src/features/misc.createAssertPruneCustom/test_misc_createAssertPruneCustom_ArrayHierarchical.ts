import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_createAssertPruneCustom_ArrayHierarchical =
  _test_misc_assertPrune(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)(
    typia.misc.createAssertPrune<ArrayHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
