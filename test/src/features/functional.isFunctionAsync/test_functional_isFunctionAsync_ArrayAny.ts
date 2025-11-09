import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_isFunctionAsync_ArrayAny = (): Promise<void> => _test_functional_isFunctionAsync(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => Promise<ArrayAny>) =>
    typia.functional.isFunction(p),
)