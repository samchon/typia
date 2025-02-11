import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsParametersAsync_DynamicTemplate =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "DynamicTemplate",
  )(DynamicTemplate)(
    (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
      typia.functional.assertEqualsParameters(p),
  );
