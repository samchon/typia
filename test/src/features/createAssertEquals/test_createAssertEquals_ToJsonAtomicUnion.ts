import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssertEquals_ToJsonAtomicUnion = _test_assertEquals(
  TypeGuardError,
)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
  typia.createAssertEquals<ToJsonAtomicUnion>(),
);
