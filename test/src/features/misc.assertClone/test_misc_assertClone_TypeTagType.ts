import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_assertClone_TypeTagType = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagType")<TypeTagType>(TypeTagType)((input) =>
  typia.misc.assertClone<TypeTagType>(input),
);
