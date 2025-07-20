import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertGuardEquals_ConstantAtomicSimple = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.createAssertGuardEquals<ConstantAtomicSimple>(),
  );
