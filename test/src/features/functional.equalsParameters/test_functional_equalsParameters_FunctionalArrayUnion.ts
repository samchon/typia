import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_equalsParameters_FunctionalArrayUnion = _test_functional_equalsParameters(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) => typia.functional.equalsParameters(p),
)