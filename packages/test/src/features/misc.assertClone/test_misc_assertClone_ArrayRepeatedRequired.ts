import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_assertClone_ArrayRepeatedRequired =
  _test_misc_assertClone("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )((input) => typia.misc.assertClone<ArrayRepeatedRequired>(input));
