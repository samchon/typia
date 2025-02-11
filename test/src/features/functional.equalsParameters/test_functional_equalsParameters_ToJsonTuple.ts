import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_equalsParameters_ToJsonTuple = _test_functional_equalsParameters(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => ToJsonTuple) => typia.functional.equalsParameters(p),
)