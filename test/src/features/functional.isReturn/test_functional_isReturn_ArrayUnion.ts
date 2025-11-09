import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_isReturn_ArrayUnion = (): void => _test_functional_isReturn(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => ArrayUnion) => typia.functional.isReturn(p),
)