import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_assert_ArrayRepeatedUnionWithTuple = _test_assert(
  "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
  typia.assert<ArrayRepeatedUnionWithTuple>(input),
);
