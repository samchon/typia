import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createAssertEqualsCustom_ConstantAtomicAbsorbed = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
    typia.createAssertEquals<ConstantAtomicAbsorbed>(
      (p) => new CustomGuardError(p),
    ),
  );
