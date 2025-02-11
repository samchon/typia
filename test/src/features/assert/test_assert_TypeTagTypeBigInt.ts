import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_assert_TypeTagTypeBigInt = _test_assert(TypeGuardError)(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.assert<TypeTagTypeBigInt>(input),
);
