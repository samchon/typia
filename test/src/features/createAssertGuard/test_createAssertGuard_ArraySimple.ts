import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimple } from "../../structures/ArraySimple";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArraySimple = _test_assertGuard(
  TypeGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)(
  typia.createAssertGuard<ArraySimple>(),
);
