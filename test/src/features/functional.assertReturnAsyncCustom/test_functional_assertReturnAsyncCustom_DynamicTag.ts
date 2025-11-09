import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_DynamicTag = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "DynamicTag"
)(DynamicTag)(
  (p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)