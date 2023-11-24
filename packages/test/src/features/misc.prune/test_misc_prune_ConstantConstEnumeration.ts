import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_prune_ConstantConstEnumeration = _test_misc_prune(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
  typia.misc.prune<ConstantConstEnumeration>(input),
);
