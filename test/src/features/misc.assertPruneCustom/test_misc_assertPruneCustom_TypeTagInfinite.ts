import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_assertPruneCustom_TypeTagInfinite =
  _test_misc_assertPrune(CustomGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )((input) =>
    typia.misc.assertPrune<TypeTagInfinite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
