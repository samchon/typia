import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateReturnAsync_ArrayUnion = (): Promise<void> => _test_functional_validateReturnAsync(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.validateReturn(p),
)