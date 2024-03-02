import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_assertGuardCustom_TypeTagPattern = _test_assertGuard(
  CustomGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.assertGuard<TypeTagPattern>(input, (p) => new CustomGuardError(p)),
);
