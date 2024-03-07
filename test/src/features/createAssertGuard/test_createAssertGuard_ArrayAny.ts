import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAny } from "../../structures/ArrayAny";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArrayAny = _test_assertGuard(
  TypeGuardError,
)("ArrayAny")<ArrayAny>(ArrayAny)(typia.createAssertGuard<ArrayAny>());
