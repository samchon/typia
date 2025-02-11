import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_DynamicUndefined = _test_functional_assertParametersAsync(TypeGuardError)(
  "DynamicUndefined"
)(DynamicUndefined)(
  (p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
    typia.functional.assertParameters(p),
)