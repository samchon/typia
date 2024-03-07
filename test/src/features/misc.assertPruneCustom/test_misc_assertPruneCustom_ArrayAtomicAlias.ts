import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ArrayAtomicAlias =
  _test_misc_assertPrune(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
    typia.misc.assertPrune<ArrayAtomicAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
