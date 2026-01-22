import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_assertPruneCustom_TypeTagLength = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) =>
    typia.misc.assertPrune<TypeTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
