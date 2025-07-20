import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_assertPrune_TypeTagRangeBigInt = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
    typia.misc.assertPrune<TypeTagRangeBigInt>(input),
  );
