import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagType } from "../../structures/TypeTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TypeTagType = _test_misc_assertClone(
  CustomGuardError,
)("TypeTagType")<TypeTagType>(TypeTagType)((input) =>
  typia.misc.assertClone<TypeTagType>(input, (p) => new CustomGuardError(p)),
);
