import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_DynamicTag = _test_functional_assertParametersAsync(TypeGuardError)(
  "DynamicTag"
)(DynamicTag)(
  (p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertParameters(p),
)