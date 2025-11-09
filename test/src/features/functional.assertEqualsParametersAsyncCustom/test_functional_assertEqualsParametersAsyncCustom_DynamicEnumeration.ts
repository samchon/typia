import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_DynamicEnumeration = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)