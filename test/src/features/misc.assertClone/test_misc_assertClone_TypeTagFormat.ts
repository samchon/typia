import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_assertClone_TypeTagFormat = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.misc.assertClone<TypeTagFormat>(input),
);
