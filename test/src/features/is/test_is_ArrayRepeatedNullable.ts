import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_is_ArrayRepeatedNullable = _test_is(
  "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)((input) =>
  typia.is<ArrayRepeatedNullable>(input),
);
