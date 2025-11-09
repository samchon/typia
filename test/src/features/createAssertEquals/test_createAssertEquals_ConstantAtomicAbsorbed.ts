import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createAssertEquals_ConstantAtomicAbsorbed = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
    typia.createAssertEquals<ConstantAtomicAbsorbed>(),
  );
