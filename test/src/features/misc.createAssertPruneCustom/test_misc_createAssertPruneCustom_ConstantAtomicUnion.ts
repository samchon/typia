import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_createAssertPruneCustom_ConstantAtomicUnion = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)(
    typia.misc.createAssertPrune<ConstantAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
