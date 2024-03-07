import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectNullable = _test_assertGuard(
  TypeGuardError,
)("ObjectNullable")<ObjectNullable>(ObjectNullable)(
  typia.createAssertGuard<ObjectNullable>(),
);
