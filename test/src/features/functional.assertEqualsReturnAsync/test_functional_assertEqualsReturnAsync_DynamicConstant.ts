import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_DynamicConstant = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.assertEqualsReturn(p),
)