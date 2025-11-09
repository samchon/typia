import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateEqualsReturnAsync_DynamicEnumeration = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.validateEqualsReturn(p),
)