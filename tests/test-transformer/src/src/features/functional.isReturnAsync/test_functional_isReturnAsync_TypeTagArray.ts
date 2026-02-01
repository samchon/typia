import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_isReturnAsync_TypeTagArray = (): Promise<void> => _test_functional_isReturnAsync(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.isReturn(p),
)