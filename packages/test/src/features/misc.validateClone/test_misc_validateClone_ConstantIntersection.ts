import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_validateClone_ConstantIntersection =
  _test_misc_validateClone("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) => typia.misc.validateClone<ConstantIntersection>(input));
