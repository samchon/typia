import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_assertGuard_ArrayRepeatedUnionWithTuple = _test_assertGuard(
  "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
  typia.assertGuard<ArrayRepeatedUnionWithTuple>(input),
);
