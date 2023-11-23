import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_is_ArrayRepeatedUnionWithTuple = _test_is(
  "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
  typia.is<ArrayRepeatedUnionWithTuple>(input),
);
