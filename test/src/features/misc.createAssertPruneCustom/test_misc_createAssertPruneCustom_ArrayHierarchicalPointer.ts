import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_createAssertPruneCustom_ArrayHierarchicalPointer =
  _test_misc_assertPrune(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
    typia.misc.createAssertPrune<ArrayHierarchicalPointer>(
      (p) => new CustomGuardError(p),
    ),
  );
