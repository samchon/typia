import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createAssertPruneCustom_ArrayRecursiveUnionImplicit =
  _test_misc_assertPrune(CustomGuardError)(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    typia.misc.createAssertPrune<ArrayRecursiveUnionImplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
