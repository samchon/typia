import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_isFunction_ArrayRepeatedNullable = _test_functional_isFunction(
  "ArrayRepeatedNullable"
)(ArrayRepeatedNullable)(
  (p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) => typia.functional.isFunction(p),
)