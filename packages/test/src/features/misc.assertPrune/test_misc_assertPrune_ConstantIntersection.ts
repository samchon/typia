import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_assertPrune_ConstantIntersection =
  _test_misc_assertPrune("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) => typia.misc.assertPrune<ConstantIntersection>(input));
