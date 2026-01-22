import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_prune_ConstantIntersection = (): void =>
  _test_misc_prune("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) => typia.misc.prune<ConstantIntersection>(input));
