import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssertGuardEquals_ToJsonAtomicUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ToJsonAtomicUnion",
  )<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
    typia.createAssertGuardEquals<ToJsonAtomicUnion>(),
  );
