import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_isReturn_FunctionalValueUnion = _test_functional_isReturn(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => FunctionalValueUnion) => typia.functional.isReturn(p),
)