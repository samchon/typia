import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createAssertEquals_ToJsonAtomicSimple = _test_assertEquals(
  TypeGuardError,
)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
  typia.createAssertEquals<ToJsonAtomicSimple>(),
);
