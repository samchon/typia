import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_isFunction_ArraySimple = _test_functional_isFunction(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => ArraySimple) => typia.functional.isFunction(p),
)