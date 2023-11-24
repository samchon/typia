import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_isClone_ArrayRepeatedNullable = _test_misc_isClone(
  "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)((input) =>
  typia.misc.isClone<ArrayRepeatedNullable>(input),
);
