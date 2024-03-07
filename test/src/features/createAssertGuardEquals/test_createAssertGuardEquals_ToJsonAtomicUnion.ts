import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ToJsonAtomicUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "ToJsonAtomicUnion",
  )<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
    typia.createAssertGuardEquals<ToJsonAtomicUnion>(),
  );
