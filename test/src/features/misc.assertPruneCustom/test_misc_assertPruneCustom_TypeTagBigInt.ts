import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_misc_assertPruneCustom_TypeTagBigInt = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )((input) =>
    typia.misc.assertPrune<TypeTagBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
