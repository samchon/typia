import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_assertEqualsCustom_TypeTagRange = _test_assertEquals(
  CustomGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)((input) =>
  typia.assertEquals<TypeTagRange>(input, (p) => new CustomGuardError(p)),
);
