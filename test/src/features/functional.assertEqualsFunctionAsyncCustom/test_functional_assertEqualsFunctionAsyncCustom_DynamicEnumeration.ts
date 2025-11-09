import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertEqualsFunctionAsyncCustom_DynamicEnumeration =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "DynamicEnumeration",
    )(DynamicEnumeration)(
      (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
