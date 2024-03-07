import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TypeTagPattern = _test_assertGuard(
  CustomGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.assertGuard<TypeTagPattern>(input, (p) => new CustomGuardError(p)),
);
