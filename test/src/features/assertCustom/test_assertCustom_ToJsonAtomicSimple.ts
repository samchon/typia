import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_assertCustom_ToJsonAtomicSimple = _test_assert(
  CustomGuardError,
)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
  typia.assert<ToJsonAtomicSimple>(input, (p) => new CustomGuardError(p)),
);
