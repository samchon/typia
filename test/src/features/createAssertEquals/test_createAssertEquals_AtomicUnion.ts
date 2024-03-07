import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_AtomicUnion = _test_assertEquals(
  TypeGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)(
  typia.createAssertEquals<AtomicUnion>(),
);
