import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_createAssertCloneCustom_ConstantAtomicAbsorbed =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
      typia.misc.createAssertClone<ConstantAtomicAbsorbed>(
        (p) => new CustomGuardError(p),
      ),
    );
