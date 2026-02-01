import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_equalsFunction_ToJsonNull = (): void => _test_functional_equalsFunction(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.equalsFunction(p),
)