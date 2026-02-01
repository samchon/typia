import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_equalsFunction_ArrayUnion = (): void => _test_functional_equalsFunction(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => ArrayUnion) => typia.functional.equalsFunction(p),
)