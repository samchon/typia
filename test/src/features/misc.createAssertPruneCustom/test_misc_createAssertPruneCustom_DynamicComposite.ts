import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_DynamicComposite =
  _test_misc_assertPrune(CustomGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)(
    typia.misc.createAssertPrune<DynamicComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
