import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assertGuard_TypeTagBigInt = _test_assertGuard(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) =>
  typia.assertGuard<TypeTagBigInt>(input),
);
