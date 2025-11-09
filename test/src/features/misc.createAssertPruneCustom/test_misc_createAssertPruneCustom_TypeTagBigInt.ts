import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_misc_createAssertPruneCustom_TypeTagBigInt = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )(
    typia.misc.createAssertPrune<TypeTagBigInt>((p) => new CustomGuardError(p)),
  );
