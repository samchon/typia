import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsParametersAsyncCustom_DynamicConstant =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "DynamicConstant",
  )(DynamicConstant)(
    (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
