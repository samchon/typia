import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagTypeBigInt = _test_assert(TypeGuardError)(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
  typia.createAssert<TypeTagTypeBigInt>(),
);
