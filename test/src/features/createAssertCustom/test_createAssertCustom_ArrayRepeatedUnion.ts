import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createAssertCustom_ArrayRepeatedUnion = _test_assert(
  CustomGuardError,
)("ArrayRepeatedUnion")<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
  typia.createAssert<ArrayRepeatedUnion>((p) => new CustomGuardError(p)),
);
