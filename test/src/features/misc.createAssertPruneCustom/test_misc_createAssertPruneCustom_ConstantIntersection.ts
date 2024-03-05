import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_createAssertPruneCustom_ConstantIntersection =
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)(
    typia.misc.createAssertPrune<ConstantIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
