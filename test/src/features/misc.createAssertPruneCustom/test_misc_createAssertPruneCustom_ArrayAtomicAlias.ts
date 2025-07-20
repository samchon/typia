import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_createAssertPruneCustom_ArrayAtomicAlias = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)(
    typia.misc.createAssertPrune<ArrayAtomicAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
