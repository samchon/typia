import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createAssert_ArrayRepeatedNullable = _test_assert(
  "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
  typia.createAssert<ArrayRepeatedNullable>(),
);
