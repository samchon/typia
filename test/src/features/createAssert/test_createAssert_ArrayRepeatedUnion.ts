import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createAssert_ArrayRepeatedUnion = _test_assert(
  TypeGuardError,
)("ArrayRepeatedUnion")<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
  typia.createAssert<ArrayRepeatedUnion>(),
);
