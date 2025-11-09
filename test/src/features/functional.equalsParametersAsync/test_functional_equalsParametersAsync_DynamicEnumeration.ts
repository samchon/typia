import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_equalsParametersAsync_DynamicEnumeration = (): Promise<void> => _test_functional_equalsParametersAsync(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.equalsParameters(p),
)