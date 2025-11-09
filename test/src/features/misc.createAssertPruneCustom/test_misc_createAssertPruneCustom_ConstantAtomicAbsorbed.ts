import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_createAssertPruneCustom_ConstantAtomicAbsorbed =
  (): void =>
    _test_misc_assertPrune(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
      typia.misc.createAssertPrune<ConstantAtomicAbsorbed>(
        (p) => new CustomGuardError(p),
      ),
    );
