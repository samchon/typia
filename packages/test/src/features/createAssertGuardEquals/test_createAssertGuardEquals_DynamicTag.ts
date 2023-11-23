import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createAssertGuardEquals_DynamicTag = _test_assertGuardEquals(
  "DynamicTag",
)<DynamicTag>(DynamicTag)(typia.createAssertGuardEquals<DynamicTag>());
