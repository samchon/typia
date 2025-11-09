import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_createValidatePrune_ConstantIntersection = (): void =>
  _test_misc_validatePrune("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )(typia.misc.createValidatePrune<ConstantIntersection>());
