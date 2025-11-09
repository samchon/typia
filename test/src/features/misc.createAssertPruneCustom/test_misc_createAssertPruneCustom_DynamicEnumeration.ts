import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createAssertPruneCustom_DynamicEnumeration = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)(
    typia.misc.createAssertPrune<DynamicEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
