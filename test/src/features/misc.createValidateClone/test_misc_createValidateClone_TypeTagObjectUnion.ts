import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_createValidateClone_TypeTagObjectUnion =
  _test_misc_validateClone("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(typia.misc.createValidateClone<TypeTagObjectUnion>());
