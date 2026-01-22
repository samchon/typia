import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_clone_ConstantIntersection = (): void =>
  _test_misc_clone("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) => typia.misc.clone<ConstantIntersection>(input));
