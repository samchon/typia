import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_clone_DynamicUndefined = _test_misc_clone(
  "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)((input) =>
  typia.misc.clone<DynamicUndefined>(input),
);
