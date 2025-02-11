import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_assertGuardCustom_TypeTagRange = _test_assertGuard(
  CustomGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)((input) =>
  typia.assertGuard<TypeTagRange>(input, (p) => new CustomGuardError(p)),
);
