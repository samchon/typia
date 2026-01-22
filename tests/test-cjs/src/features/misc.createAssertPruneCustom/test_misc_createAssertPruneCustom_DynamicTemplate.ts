import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_createAssertPruneCustom_DynamicTemplate = (): void =>
  _test_misc_assertPrune(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(
    typia.misc.createAssertPrune<DynamicTemplate>(
      (p) => new CustomGuardError(p),
    ),
  );
