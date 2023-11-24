import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assertGuard_ConstantAtomicUnion = _test_assertGuard(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.assertGuard<ConstantAtomicUnion>(input),
);
