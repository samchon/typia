import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createIs_TypeTagRangeBigInt = _test_is(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)(typia.createIs<TypeTagRangeBigInt>());
