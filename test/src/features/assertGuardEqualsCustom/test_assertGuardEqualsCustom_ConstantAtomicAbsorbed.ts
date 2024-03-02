import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_assertGuardEqualsCustom_ConstantAtomicAbsorbed =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
    typia.assertGuardEquals<ConstantAtomicAbsorbed>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
