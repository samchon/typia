import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagRangeBigInt = _test_assert(
  TypeGuardError,
)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
  typia.createAssert<TypeTagRangeBigInt>(),
);
