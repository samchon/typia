import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_DynamicTree = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)