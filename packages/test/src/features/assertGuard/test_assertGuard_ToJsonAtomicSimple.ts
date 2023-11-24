import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_assertGuard_ToJsonAtomicSimple = _test_assertGuard(
  "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
  typia.assertGuard<ToJsonAtomicSimple>(input),
);
