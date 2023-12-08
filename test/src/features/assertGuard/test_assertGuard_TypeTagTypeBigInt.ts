import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_assertGuard_TypeTagTypeBigInt = _test_assertGuard(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.assertGuard<TypeTagTypeBigInt>(input),
);
