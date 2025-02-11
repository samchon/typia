import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_isReturn_FunctionalObjectUnion = _test_functional_isReturn(
  "FunctionalObjectUnion"
)(FunctionalObjectUnion)(
  (p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) => typia.functional.isReturn(p),
)