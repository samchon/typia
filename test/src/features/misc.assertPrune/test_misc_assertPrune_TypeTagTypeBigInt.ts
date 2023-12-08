import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_misc_assertPrune_TypeTagTypeBigInt = _test_misc_assertPrune(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.misc.assertPrune<TypeTagTypeBigInt>(input),
);
