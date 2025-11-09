import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_isFunction_ArrayRepeatedUnionWithTuple = (): void => _test_functional_isFunction(
  "ArrayRepeatedUnionWithTuple"
)(ArrayRepeatedUnionWithTuple)(
  (p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple) => typia.functional.isFunction(p),
)