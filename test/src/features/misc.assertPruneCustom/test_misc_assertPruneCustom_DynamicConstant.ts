import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_DynamicConstant =
  _test_misc_assertPrune(CustomGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )((input) =>
    typia.misc.assertPrune<DynamicConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
