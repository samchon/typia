import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_isParameters_FunctionalTupleUnion = (): void => _test_functional_isParameters(
  "FunctionalTupleUnion"
)(FunctionalTupleUnion)(
  (p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) => typia.functional.isParameters(p),
)