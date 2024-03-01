import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_createAssertPruneCustom_TypeTagInfinite =
  _test_misc_assertPrune(CustomGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )(
    typia.misc.createAssertPrune<TypeTagInfinite>(
      (p) => new CustomGuardError(p),
    ),
  );
