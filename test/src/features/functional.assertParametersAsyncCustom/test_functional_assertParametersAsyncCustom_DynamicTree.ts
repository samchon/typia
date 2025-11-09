import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_DynamicTree = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)