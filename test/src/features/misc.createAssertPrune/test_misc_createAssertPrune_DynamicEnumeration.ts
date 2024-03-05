import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createAssertPrune_DynamicEnumeration =
  _test_misc_assertPrune(TypeGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)(
    typia.misc.createAssertPrune<DynamicEnumeration>(),
  );
