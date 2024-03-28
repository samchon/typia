import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_assertClone_TypeTagObjectUnion = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagObjectUnion")<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  typia.misc.assertClone<TypeTagObjectUnion>(input),
);
