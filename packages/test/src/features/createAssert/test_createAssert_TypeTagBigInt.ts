import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createAssert_TypeTagBigInt = _test_assert(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)(typia.createAssert<TypeTagBigInt>());
