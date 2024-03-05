import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_assert_ToJsonAtomicSimple = _test_assert(TypeGuardError)(
  "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
  typia.assert<ToJsonAtomicSimple>(input),
);
