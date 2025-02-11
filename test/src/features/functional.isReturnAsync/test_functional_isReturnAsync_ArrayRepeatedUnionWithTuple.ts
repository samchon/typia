import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_isReturnAsync_ArrayRepeatedUnionWithTuple = _test_functional_isReturnAsync(
  "ArrayRepeatedUnionWithTuple"
)(ArrayRepeatedUnionWithTuple)(
  (p: (input: ArrayRepeatedUnionWithTuple) => Promise<ArrayRepeatedUnionWithTuple>) =>
    typia.functional.isReturn(p),
)