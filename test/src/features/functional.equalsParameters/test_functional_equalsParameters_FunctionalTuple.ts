import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_equalsParameters_FunctionalTuple = _test_functional_equalsParameters(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => FunctionalTuple) => typia.functional.equalsParameters(p),
)