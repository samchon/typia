import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_validateReturnAsync_DynamicSimple = (): Promise<void> => _test_functional_validateReturnAsync(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.validateReturn(p),
)