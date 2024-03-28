import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_assertPruneCustom_TypeTagRangeBigInt =
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
    typia.misc.assertPrune<TypeTagRangeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
