import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_DynamicEnumeration =
  _test_misc_assertPrune(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.misc.assertPrune<DynamicEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
