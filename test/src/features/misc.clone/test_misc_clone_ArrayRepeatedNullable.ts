import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_clone_ArrayRepeatedNullable = (): void =>
  _test_misc_clone("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
    ArrayRepeatedNullable,
  )((input) => typia.misc.clone<ArrayRepeatedNullable>(input));
