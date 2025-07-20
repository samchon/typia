import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_createAssertPruneCustom_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_misc_assertPrune(CustomGuardError)(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
      typia.misc.createAssertPrune<ArrayRecursiveUnionExplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
