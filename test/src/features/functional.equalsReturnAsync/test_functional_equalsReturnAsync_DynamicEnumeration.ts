import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_equalsReturnAsync_DynamicEnumeration = _test_functional_equalsReturnAsync(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.equalsReturn(p),
)