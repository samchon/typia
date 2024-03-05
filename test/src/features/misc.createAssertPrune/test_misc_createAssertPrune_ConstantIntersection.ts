import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_createAssertPrune_ConstantIntersection =
  _test_misc_assertPrune(TypeGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)(
    typia.misc.createAssertPrune<ConstantIntersection>(),
  );
