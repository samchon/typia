import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_createAssertClone_ConstantIntersection =
  _test_misc_assertClone("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )(typia.misc.createAssertClone<ConstantIntersection>());
