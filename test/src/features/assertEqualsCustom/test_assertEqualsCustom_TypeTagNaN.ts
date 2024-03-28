import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_assertEqualsCustom_TypeTagNaN = _test_assertEquals(
  CustomGuardError,
)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)((input) =>
  typia.assertEquals<TypeTagNaN>(input, (p) => new CustomGuardError(p)),
);
