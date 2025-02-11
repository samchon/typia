import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_isReturnAsync_DynamicNever = _test_functional_isReturnAsync(
  "DynamicNever"
)(DynamicNever)(
  (p: (input: DynamicNever) => Promise<DynamicNever>) =>
    typia.functional.isReturn(p),
)