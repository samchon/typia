import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_isPrune_ConstantIntersection = _test_misc_isPrune(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.misc.isPrune<ConstantIntersection>(input),
);
