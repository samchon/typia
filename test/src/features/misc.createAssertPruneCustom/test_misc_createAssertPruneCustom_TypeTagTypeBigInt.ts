import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_misc_createAssertPruneCustom_TypeTagTypeBigInt = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagTypeBigInt",
  )<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
    typia.misc.createAssertPrune<TypeTagTypeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
