import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createAssertPruneCustom_ConstantConstEnumeration =
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.misc.createAssertPrune<ConstantConstEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
