import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_isParameters_TypeTagObjectUnion = _test_functional_isParameters(
  "TypeTagObjectUnion"
)(TypeTagObjectUnion)(
  (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) => typia.functional.isParameters(p),
)