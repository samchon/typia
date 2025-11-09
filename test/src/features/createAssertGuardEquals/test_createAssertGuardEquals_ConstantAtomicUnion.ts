import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertGuardEquals_ConstantAtomicUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)(
    typia.createAssertGuardEquals<ConstantAtomicUnion>(),
  );
