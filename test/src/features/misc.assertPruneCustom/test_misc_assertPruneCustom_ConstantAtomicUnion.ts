import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_assertPruneCustom_ConstantAtomicUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    typia.misc.assertPrune<ConstantAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
