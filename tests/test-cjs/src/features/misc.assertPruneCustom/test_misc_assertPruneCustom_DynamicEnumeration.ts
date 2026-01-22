import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_assertPruneCustom_DynamicEnumeration = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.misc.assertPrune<DynamicEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
