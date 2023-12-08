import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_misc_validatePrune_TypeTagBigInt = _test_misc_validatePrune(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) =>
  typia.misc.validatePrune<TypeTagBigInt>(input),
);
