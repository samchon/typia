import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_assertPruneCustom_ConstantEnumeration =
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)((input) =>
    typia.misc.assertPrune<ConstantEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
