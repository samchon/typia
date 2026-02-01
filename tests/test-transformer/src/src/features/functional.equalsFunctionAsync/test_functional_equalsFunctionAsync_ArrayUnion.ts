import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_equalsFunctionAsync_ArrayUnion = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.equalsFunction(p),
)