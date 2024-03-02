import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_createAssertPruneCustom_DynamicConstant =
  _test_misc_assertPrune(CustomGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )(
    typia.misc.createAssertPrune<DynamicConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
