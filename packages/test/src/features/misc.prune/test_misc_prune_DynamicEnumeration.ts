import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_prune_DynamicEnumeration = _test_misc_prune(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
  typia.misc.prune<DynamicEnumeration>(input),
);
