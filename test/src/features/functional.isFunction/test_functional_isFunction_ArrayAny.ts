import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_isFunction_ArrayAny = _test_functional_isFunction(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => ArrayAny) => typia.functional.isFunction(p),
)