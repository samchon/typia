import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_isFunctionAsync_ArrayUnion = (): Promise<void> => _test_functional_isFunctionAsync(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.isFunction(p),
)