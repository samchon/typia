import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_createAssertClone_ArraySimple = _test_misc_assertClone(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.misc.createAssertClone<ArraySimple>());
