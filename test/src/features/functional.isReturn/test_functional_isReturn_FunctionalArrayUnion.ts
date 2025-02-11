import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_isReturn_FunctionalArrayUnion = _test_functional_isReturn(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) => typia.functional.isReturn(p),
)