import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_assertPruneCustom_TypeTagDefault = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) =>
    typia.misc.assertPrune<TypeTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
