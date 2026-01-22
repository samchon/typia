import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createAssertGuardEqualsCustom_ConstantAtomicAbsorbed =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
      typia.createAssertGuardEquals<ConstantAtomicAbsorbed>(
        (p) => new CustomGuardError(p),
      ),
    );
