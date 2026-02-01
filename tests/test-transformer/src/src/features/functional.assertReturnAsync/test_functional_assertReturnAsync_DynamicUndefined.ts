import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_DynamicUndefined = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "DynamicUndefined"
)(DynamicUndefined)(
  (p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
    typia.functional.assertReturn(p),
)