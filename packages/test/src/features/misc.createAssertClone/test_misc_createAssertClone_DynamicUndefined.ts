import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_createAssertClone_DynamicUndefined =
  _test_misc_assertClone("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )(typia.misc.createAssertClone<DynamicUndefined>());
