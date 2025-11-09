import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_isFunction_FunctionalTupleUnion = (): void => _test_functional_isFunction(
  "FunctionalTupleUnion"
)(FunctionalTupleUnion)(
  (p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) => typia.functional.isFunction(p),
)