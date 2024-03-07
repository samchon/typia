import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ConstantAtomicSimple =
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
    typia.misc.assertPrune<ConstantAtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
