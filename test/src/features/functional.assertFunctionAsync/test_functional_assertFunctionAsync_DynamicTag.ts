import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_DynamicTag = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "DynamicTag"
)(DynamicTag)(
  (p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertFunction(p),
)