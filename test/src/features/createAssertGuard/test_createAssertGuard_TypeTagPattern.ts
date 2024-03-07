import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TypeTagPattern = _test_assertGuard(
  TypeGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
  typia.createAssertGuard<TypeTagPattern>(),
);
