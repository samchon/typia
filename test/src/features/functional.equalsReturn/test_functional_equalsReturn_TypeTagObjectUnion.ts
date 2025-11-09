import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_equalsReturn_TypeTagObjectUnion = (): void => _test_functional_equalsReturn(
  "TypeTagObjectUnion"
)(TypeTagObjectUnion)(
  (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) => typia.functional.equalsReturn(p),
)