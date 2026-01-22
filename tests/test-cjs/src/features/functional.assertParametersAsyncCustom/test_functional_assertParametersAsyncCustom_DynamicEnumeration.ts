import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertParametersAsyncCustom_DynamicEnumeration =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "DynamicEnumeration",
    )(DynamicEnumeration)(
      (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
