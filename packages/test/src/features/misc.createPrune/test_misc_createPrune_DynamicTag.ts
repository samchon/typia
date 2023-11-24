import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_createPrune_DynamicTag = _test_misc_prune(
  "DynamicTag",
)<DynamicTag>(DynamicTag)(typia.misc.createPrune<DynamicTag>());
