import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ArrayHierarchicalPointer =
  _test_misc_assertPrune(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.misc.assertPrune<ArrayHierarchicalPointer>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
