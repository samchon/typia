import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_misc_createAssertClone_ArrayAny = _test_misc_assertClone(
  "ArrayAny",
)<ArrayAny>(ArrayAny)(typia.misc.createAssertClone<ArrayAny>());
