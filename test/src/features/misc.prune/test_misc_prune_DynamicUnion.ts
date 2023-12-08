import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_prune_DynamicUnion = _test_misc_prune(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) => typia.misc.prune<DynamicUnion>(input));
