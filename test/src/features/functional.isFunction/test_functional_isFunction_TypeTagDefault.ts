import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_isFunction_TypeTagDefault = _test_functional_isFunction(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => TypeTagDefault) => typia.functional.isFunction(p),
)