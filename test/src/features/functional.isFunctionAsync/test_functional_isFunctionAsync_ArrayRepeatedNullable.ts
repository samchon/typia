import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_isFunctionAsync_ArrayRepeatedNullable = _test_functional_isFunctionAsync(
  "ArrayRepeatedNullable"
)(ArrayRepeatedNullable)(
  (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
    typia.functional.isFunction(p),
)