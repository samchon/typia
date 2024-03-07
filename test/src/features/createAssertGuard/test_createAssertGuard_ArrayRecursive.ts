import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArrayRecursive = _test_assertGuard(
  TypeGuardError,
)("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
  typia.createAssertGuard<ArrayRecursive>(),
);
