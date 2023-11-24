import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createIsPrune_DynamicUnion = _test_misc_isPrune(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.misc.createIsPrune<DynamicUnion>());
