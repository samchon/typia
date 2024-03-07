import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TypeTagDefault = _test_assertGuard(
  TypeGuardError,
)("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
  typia.createAssertGuard<TypeTagDefault>(),
);
