import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createAssertGuard_ArrayAny = _test_assertGuard(
  TypeGuardError,
)("ArrayAny")<ArrayAny>(ArrayAny)(typia.createAssertGuard<ArrayAny>());
