import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_isFunction_TypeTagTypeUnion = _test_functional_isFunction(
  "TypeTagTypeUnion"
)(TypeTagTypeUnion)(
  (p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) => typia.functional.isFunction(p),
)