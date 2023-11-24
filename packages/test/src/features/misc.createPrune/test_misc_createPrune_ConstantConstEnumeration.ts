import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createPrune_ConstantConstEnumeration = _test_misc_prune(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)(
  typia.misc.createPrune<ConstantConstEnumeration>(),
);
