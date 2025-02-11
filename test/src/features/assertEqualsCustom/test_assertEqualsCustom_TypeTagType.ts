import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_assertEqualsCustom_TypeTagType = _test_assertEquals(
  CustomGuardError,
)("TypeTagType")<TypeTagType>(TypeTagType)((input) =>
  typia.assertEquals<TypeTagType>(input, (p) => new CustomGuardError(p)),
);
