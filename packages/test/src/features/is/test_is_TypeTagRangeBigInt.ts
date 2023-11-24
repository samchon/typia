import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_is_TypeTagRangeBigInt = _test_is(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
  typia.is<TypeTagRangeBigInt>(input),
);
