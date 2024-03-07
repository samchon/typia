import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayRepeatedNullable = _test_assert(
  CustomGuardError,
)("ArrayRepeatedNullable")<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
  (input) =>
    typia.assert<ArrayRepeatedNullable>(input, (p) => new CustomGuardError(p)),
);
