import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { TypeGuardError } from "typia";

export const test_assert_ArrayRepeatedNullable = _test_assert(TypeGuardError)(
  "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)((input) =>
  typia.assert<ArrayRepeatedNullable>(input),
);
