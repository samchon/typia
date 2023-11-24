import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_createValidateClone_ArrayRepeatedRequired =
  _test_misc_validateClone("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )(typia.misc.createValidateClone<ArrayRepeatedRequired>());
