import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateReturnAsync_TypeTagArray = (): Promise<void> => _test_functional_validateReturnAsync(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.validateReturn(p),
)