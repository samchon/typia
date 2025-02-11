import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_assertGuardCustom_TypeTagInfinite = _test_assertGuard(
  CustomGuardError,
)("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)((input) =>
  typia.assertGuard<TypeTagInfinite>(input, (p) => new CustomGuardError(p)),
);
