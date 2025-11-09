import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_equalsFunction_FunctionalTupleUnion = (): void => _test_functional_equalsFunction(
  "FunctionalTupleUnion"
)(FunctionalTupleUnion)(
  (p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) => typia.functional.equalsFunction(p),
)