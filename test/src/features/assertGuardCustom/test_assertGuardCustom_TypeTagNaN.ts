import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TypeTagNaN = _test_assertGuard(
  CustomGuardError,
)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)((input) =>
  typia.assertGuard<TypeTagNaN>(input, (p) => new CustomGuardError(p)),
);
