import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_assertPrune_DynamicEnumeration = _test_misc_assertPrune(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
  typia.misc.assertPrune<DynamicEnumeration>(input),
);
