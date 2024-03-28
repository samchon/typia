import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsParametersAsyncCustom_DynamicTemplate =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "DynamicTemplate",
  )(DynamicTemplate)(
    (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
