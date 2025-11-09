import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_isFunction_ArrayRepeatedUnion = (): void => _test_functional_isFunction(
  "ArrayRepeatedUnion"
)(ArrayRepeatedUnion)(
  (p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) => typia.functional.isFunction(p),
)