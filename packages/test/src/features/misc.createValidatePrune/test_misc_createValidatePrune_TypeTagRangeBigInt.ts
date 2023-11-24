import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_createValidatePrune_TypeTagRangeBigInt =
  _test_misc_validatePrune("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )(typia.misc.createValidatePrune<TypeTagRangeBigInt>());
