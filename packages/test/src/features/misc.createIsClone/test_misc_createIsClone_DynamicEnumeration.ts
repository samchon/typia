import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createIsClone_DynamicEnumeration = _test_misc_isClone(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)(
  typia.misc.createIsClone<DynamicEnumeration>(),
);
