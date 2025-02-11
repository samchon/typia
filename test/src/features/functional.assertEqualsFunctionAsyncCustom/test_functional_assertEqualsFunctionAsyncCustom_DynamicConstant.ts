import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsFunctionAsyncCustom_DynamicConstant =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "DynamicConstant",
  )(DynamicConstant)(
    (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
