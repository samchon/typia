import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_assertClone_TypeTagRange = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)((input) =>
  typia.misc.assertClone<TypeTagRange>(input),
);
