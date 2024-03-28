import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_misc_assertPruneCustom_TypeTagTypeBigInt =
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagTypeBigInt",
  )<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
    typia.misc.assertPrune<TypeTagTypeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
