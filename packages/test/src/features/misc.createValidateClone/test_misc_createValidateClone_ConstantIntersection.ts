import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_createValidateClone_ConstantIntersection =
  _test_misc_validateClone("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )(typia.misc.createValidateClone<ConstantIntersection>());
