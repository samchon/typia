import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_assertPruneCustom_TypeTagObjectUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.misc.assertPrune<TypeTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
