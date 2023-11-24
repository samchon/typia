import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_isPrune_ArraySimple = _test_misc_isPrune(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) => typia.misc.isPrune<ArraySimple>(input));
