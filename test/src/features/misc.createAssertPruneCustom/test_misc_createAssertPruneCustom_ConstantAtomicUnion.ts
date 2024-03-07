import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ConstantAtomicUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)(
    typia.misc.createAssertPrune<ConstantAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
