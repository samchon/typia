import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createAssert_TypeTagTypeBigInt = _test_assert(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
  typia.createAssert<TypeTagTypeBigInt>(),
);
