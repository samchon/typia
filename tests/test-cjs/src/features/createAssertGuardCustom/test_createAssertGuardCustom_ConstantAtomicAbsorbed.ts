import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createAssertGuardCustom_ConstantAtomicAbsorbed = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
    typia.createAssertGuard<ConstantAtomicAbsorbed>(
      (p) => new CustomGuardError(p),
    ),
  );
