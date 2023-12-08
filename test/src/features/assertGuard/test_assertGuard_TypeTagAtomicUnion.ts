import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_assertGuard_TypeTagAtomicUnion = _test_assertGuard(
  "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
  typia.assertGuard<TypeTagAtomicUnion>(input),
);
