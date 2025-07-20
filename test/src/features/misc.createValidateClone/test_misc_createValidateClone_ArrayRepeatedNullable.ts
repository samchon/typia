import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_createValidateClone_ArrayRepeatedNullable = (): void =>
  _test_misc_validateClone("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
    ArrayRepeatedNullable,
  )(typia.misc.createValidateClone<ArrayRepeatedNullable>());
