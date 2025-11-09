import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_equalsReturn_ToJsonTuple = (): void => _test_functional_equalsReturn(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => ToJsonTuple) => typia.functional.equalsReturn(p),
)