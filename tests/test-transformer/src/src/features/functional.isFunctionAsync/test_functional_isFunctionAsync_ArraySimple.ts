import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_isFunctionAsync_ArraySimple = (): Promise<void> => _test_functional_isFunctionAsync(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.isFunction(p),
)