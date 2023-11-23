import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_isPrune_DynamicTag = _test_misc_isPrune(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) => typia.misc.isPrune<DynamicTag>(input));
