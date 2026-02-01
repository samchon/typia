import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_validateReturnAsync_ArrayAny = (): Promise<void> => _test_functional_validateReturnAsync(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => Promise<ArrayAny>) =>
    typia.functional.validateReturn(p),
)