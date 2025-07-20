import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_createPrune_ConstantIntersection = (): void =>
  _test_misc_prune("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )(typia.misc.createPrune<ConstantIntersection>());
