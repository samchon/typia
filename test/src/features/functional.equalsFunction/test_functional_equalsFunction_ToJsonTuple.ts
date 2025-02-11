import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_equalsFunction_ToJsonTuple = _test_functional_equalsFunction(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => ToJsonTuple) => typia.functional.equalsFunction(p),
)