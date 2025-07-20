import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_assertPruneCustom_ConstantAtomicTagged = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
    typia.misc.assertPrune<ConstantAtomicTagged>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
