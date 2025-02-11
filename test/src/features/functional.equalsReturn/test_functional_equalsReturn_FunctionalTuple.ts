import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_equalsReturn_FunctionalTuple = _test_functional_equalsReturn(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => FunctionalTuple) => typia.functional.equalsReturn(p),
)