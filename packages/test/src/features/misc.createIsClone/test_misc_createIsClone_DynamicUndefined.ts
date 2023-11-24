import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_createIsClone_DynamicUndefined = _test_misc_isClone(
  "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)(
  typia.misc.createIsClone<DynamicUndefined>(),
);
