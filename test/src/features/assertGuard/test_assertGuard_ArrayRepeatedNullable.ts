import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_assertGuard_ArrayRepeatedNullable = _test_assertGuard(
  "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)((input) =>
  typia.assertGuard<ArrayRepeatedNullable>(input),
);
