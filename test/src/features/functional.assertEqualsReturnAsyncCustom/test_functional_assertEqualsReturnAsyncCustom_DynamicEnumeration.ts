import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_DynamicEnumeration = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)