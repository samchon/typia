import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_assertGuard_DynamicTag = _test_assertGuard(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) => typia.assertGuard<DynamicTag>(input));
