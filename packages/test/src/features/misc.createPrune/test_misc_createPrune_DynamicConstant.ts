import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_createPrune_DynamicConstant = _test_misc_prune(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)(typia.misc.createPrune<DynamicConstant>());
