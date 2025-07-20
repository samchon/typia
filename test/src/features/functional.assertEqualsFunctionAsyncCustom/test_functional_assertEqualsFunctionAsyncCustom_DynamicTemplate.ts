import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsFunctionAsyncCustom_DynamicTemplate =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "DynamicTemplate",
    )(DynamicTemplate)(
      (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
