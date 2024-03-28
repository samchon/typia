import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_createAssertPruneCustom_TypeTagObjectUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.misc.createAssertPrune<TypeTagObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
