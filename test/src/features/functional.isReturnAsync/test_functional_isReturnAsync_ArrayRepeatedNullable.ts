import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_isReturnAsync_ArrayRepeatedNullable = (): Promise<void> => _test_functional_isReturnAsync(
  "ArrayRepeatedNullable"
)(ArrayRepeatedNullable)(
  (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
    typia.functional.isReturn(p),
)