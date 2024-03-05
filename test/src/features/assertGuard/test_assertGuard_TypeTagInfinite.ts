import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_assertGuard_TypeTagInfinite = _test_assertGuard(
  TypeGuardError,
)("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)((input) =>
  typia.assertGuard<TypeTagInfinite>(input),
);
