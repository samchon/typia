import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TypeTagInfinite = _test_assertGuard(
  TypeGuardError,
)("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)(
  typia.createAssertGuard<TypeTagInfinite>(),
);
