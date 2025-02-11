import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_assertGuardCustom_TypeTagNaN = _test_assertGuard(
  CustomGuardError,
)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)((input) =>
  typia.assertGuard<TypeTagNaN>(input, (p) => new CustomGuardError(p)),
);
