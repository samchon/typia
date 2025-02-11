import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_equalsReturn_TypeTagInfinite = _test_functional_equalsReturn(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => TypeTagInfinite) => typia.functional.equalsReturn(p),
)