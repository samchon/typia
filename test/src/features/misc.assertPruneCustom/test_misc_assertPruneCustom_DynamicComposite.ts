import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_assertPruneCustom_DynamicComposite =
  _test_misc_assertPrune(CustomGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)((input) =>
    typia.misc.assertPrune<DynamicComposite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
