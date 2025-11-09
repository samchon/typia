import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_clone_ArrayRepeatedRequired = (): void =>
  _test_misc_clone("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )((input) => typia.misc.clone<ArrayRepeatedRequired>(input));
