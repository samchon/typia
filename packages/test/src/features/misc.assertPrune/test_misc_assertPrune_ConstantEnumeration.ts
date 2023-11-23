import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_assertPrune_ConstantEnumeration = _test_misc_assertPrune(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  typia.misc.assertPrune<ConstantEnumeration>(input),
);
