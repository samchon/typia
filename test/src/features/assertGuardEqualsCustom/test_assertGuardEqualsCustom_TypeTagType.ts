import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagType } from "../../structures/TypeTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_TypeTagType = _test_assertGuardEquals(
  CustomGuardError,
)("TypeTagType")<TypeTagType>(TypeTagType)((input) =>
  typia.assertGuardEquals<TypeTagType>(input, (p) => new CustomGuardError(p)),
);
