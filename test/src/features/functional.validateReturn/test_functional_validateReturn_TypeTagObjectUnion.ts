import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_validateReturn_TypeTagObjectUnion = (): void => _test_functional_validateReturn(
  "TypeTagObjectUnion"
)(TypeTagObjectUnion)(
  (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) => typia.functional.validateReturn(p),
)