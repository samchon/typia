import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_createIsClone_ArrayRepeatedNullable = (): void =>
  _test_misc_isClone("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
    ArrayRepeatedNullable,
  )(typia.misc.createIsClone<ArrayRepeatedNullable>());
