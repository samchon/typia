import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_assertGuard_TypeTagArray = _test_assertGuard(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) =>
  typia.assertGuard<TypeTagArray>(input),
);
