import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_assertEqualsCustom_ToJsonAtomicSimple = _test_assertEquals(
  CustomGuardError,
)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
  typia.assertEquals<ToJsonAtomicSimple>(input, (p) => new CustomGuardError(p)),
);
