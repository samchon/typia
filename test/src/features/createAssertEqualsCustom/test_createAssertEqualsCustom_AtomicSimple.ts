import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_AtomicSimple = _test_assertEquals(
  CustomGuardError,
)("AtomicSimple")<AtomicSimple>(AtomicSimple)(
  typia.createAssertEquals<AtomicSimple>((p) => new CustomGuardError(p)),
);
