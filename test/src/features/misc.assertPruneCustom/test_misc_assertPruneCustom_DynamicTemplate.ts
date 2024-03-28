import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_assertPruneCustom_DynamicTemplate =
  _test_misc_assertPrune(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) =>
    typia.misc.assertPrune<DynamicTemplate>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
