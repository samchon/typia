import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_isFunctionAsync_DynamicEnumeration = (): Promise<void> => _test_functional_isFunctionAsync(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.isFunction(p),
)