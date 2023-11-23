import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertGuardEquals_ArraySimple = _test_assertGuardEquals(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.createAssertGuardEquals<ArraySimple>());
