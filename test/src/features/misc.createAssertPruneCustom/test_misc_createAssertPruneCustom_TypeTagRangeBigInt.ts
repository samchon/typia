import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_createAssertPruneCustom_TypeTagRangeBigInt = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
    typia.misc.createAssertPrune<TypeTagRangeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
