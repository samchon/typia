import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_equalsFunction_ToJsonArray = (): void => _test_functional_equalsFunction(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => ToJsonArray) => typia.functional.equalsFunction(p),
)