import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_assertPrune_DynamicTag = _test_misc_assertPrune(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) => typia.misc.assertPrune<DynamicTag>(input));
