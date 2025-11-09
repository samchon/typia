import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateReturnAsync_ConstantEnumeration = (): Promise<void> => _test_functional_validateReturnAsync(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.validateReturn(p),
)