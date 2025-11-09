import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_validateEqualsFunction_TypeTagObjectUnion = (): void => _test_functional_validateEqualsFunction(
  "TypeTagObjectUnion"
)(TypeTagObjectUnion)(
  (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) => typia.functional.validateEqualsFunction(p),
)