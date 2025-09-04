import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createAssertGuardEquals_ConstantAtomicAbsorbed = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
    typia.createAssertGuardEquals<ConstantAtomicAbsorbed>(),
  );
