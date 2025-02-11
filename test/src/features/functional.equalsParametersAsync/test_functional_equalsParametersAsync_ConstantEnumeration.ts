import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_equalsParametersAsync_ConstantEnumeration = _test_functional_equalsParametersAsync(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.equalsParameters(p),
)