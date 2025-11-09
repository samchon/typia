import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_DynamicEnumeration = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.assertReturn(p),
)