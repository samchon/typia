import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_assertPrune_DynamicEnumeration = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.misc.assertPrune<DynamicEnumeration>(input),
  );
