import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_createAssertPruneCustom_ArrayRecursiveUnionExplicitPointer =
  _test_misc_assertPrune(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    typia.misc.createAssertPrune<ArrayRecursiveUnionExplicitPointer>(
      (p) => new CustomGuardError(p),
    ),
  );
