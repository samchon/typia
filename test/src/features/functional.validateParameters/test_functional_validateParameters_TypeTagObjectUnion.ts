import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_validateParameters_TypeTagObjectUnion = (): void => _test_functional_validateParameters(
  "TypeTagObjectUnion"
)(TypeTagObjectUnion)(
  (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) => typia.functional.validateParameters(p),
)