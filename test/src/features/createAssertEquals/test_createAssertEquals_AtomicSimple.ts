import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertEquals_AtomicSimple = _test_assertEquals(
  TypeGuardError,
)("AtomicSimple")<AtomicSimple>(AtomicSimple)(
  typia.createAssertEquals<AtomicSimple>(),
);
