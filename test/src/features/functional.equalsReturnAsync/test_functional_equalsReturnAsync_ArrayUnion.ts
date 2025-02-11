import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_equalsReturnAsync_ArrayUnion = _test_functional_equalsReturnAsync(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.equalsReturn(p),
)