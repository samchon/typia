import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_assertPrune_ConstantIntersection = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)((input) =>
    typia.misc.assertPrune<ConstantIntersection>(input),
  );
