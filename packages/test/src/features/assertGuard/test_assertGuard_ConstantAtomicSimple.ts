import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assertGuard_ConstantAtomicSimple = _test_assertGuard(
  "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
  typia.assertGuard<ConstantAtomicSimple>(input),
);
