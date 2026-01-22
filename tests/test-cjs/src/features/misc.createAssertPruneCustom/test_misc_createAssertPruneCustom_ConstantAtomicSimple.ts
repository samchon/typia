import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_createAssertPruneCustom_ConstantAtomicSimple =
  (): void =>
    _test_misc_assertPrune(CustomGuardError)(
      "ConstantAtomicSimple",
    )<ConstantAtomicSimple>(ConstantAtomicSimple)(
      typia.misc.createAssertPrune<ConstantAtomicSimple>(
        (p) => new CustomGuardError(p),
      ),
    );
