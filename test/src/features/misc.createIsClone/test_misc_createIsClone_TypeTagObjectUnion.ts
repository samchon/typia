import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_createIsClone_TypeTagObjectUnion = (): void =>
  _test_misc_isClone("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(typia.misc.createIsClone<TypeTagObjectUnion>());
