import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_DynamicEnumeration =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "DynamicEnumeration",
  )(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
