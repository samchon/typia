import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_assertEqualsCustom_ConstantAtomicAbsorbed = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
    typia.assertEquals<ConstantAtomicAbsorbed>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
