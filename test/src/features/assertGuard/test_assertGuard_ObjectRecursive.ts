import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectRecursive = _test_assertGuard(
  TypeGuardError,
)("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)((input) =>
  typia.assertGuard<ObjectRecursive>(input),
);
