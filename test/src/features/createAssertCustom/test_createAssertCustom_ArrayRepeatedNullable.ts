import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createAssertCustom_ArrayRepeatedNullable = _test_assert(
  CustomGuardError,
)("ArrayRepeatedNullable")<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
  typia.createAssert<ArrayRepeatedNullable>((p) => new CustomGuardError(p)),
);
