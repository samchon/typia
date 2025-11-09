import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssertGuard_TypeTagPattern = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(typia.createAssertGuard<TypeTagPattern>());
