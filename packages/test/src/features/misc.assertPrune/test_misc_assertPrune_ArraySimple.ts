import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_assertPrune_ArraySimple = _test_misc_assertPrune(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
  typia.misc.assertPrune<ArraySimple>(input),
);
