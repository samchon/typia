import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_validateEquals_TypeTagRangeBigInt = _test_validateEquals(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
  typia.validateEquals<TypeTagRangeBigInt>(input),
);
