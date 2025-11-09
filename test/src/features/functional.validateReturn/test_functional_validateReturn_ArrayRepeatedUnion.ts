import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_validateReturn_ArrayRepeatedUnion = (): void => _test_functional_validateReturn(
  "ArrayRepeatedUnion"
)(ArrayRepeatedUnion)(
  (p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) => typia.functional.validateReturn(p),
)