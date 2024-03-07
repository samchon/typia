import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArrayRepeatedUnion = _test_assertGuard(
  TypeGuardError,
)("ArrayRepeatedUnion")<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
  typia.createAssertGuard<ArrayRepeatedUnion>(),
);
