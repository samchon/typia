import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_equalsFunctionAsync_ConstantEnumeration = _test_functional_equalsFunctionAsync(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.equalsFunction(p),
)