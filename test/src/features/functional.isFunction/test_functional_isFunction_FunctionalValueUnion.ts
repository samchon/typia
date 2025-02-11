import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_isFunction_FunctionalValueUnion = _test_functional_isFunction(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => FunctionalValueUnion) => typia.functional.isFunction(p),
)