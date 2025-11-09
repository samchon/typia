import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_misc_createAssertPrune_TypeTagTypeBigInt = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "TypeTagTypeBigInt",
  )<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
    typia.misc.createAssertPrune<TypeTagTypeBigInt>(),
  );
