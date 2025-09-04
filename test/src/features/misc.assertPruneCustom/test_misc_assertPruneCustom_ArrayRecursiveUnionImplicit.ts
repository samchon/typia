import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_assertPruneCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_misc_assertPrune(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
      typia.misc.assertPrune<ArrayRecursiveUnionImplicit>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
