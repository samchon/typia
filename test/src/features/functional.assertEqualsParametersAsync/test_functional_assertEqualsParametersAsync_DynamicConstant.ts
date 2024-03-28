import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsParametersAsync_DynamicConstant =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "DynamicConstant",
  )(DynamicConstant)(
    (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.assertEqualsParameters(p),
  );
