import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_isFunction_ToJsonTuple = (): void => _test_functional_isFunction(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => ToJsonTuple) => typia.functional.isFunction(p),
)