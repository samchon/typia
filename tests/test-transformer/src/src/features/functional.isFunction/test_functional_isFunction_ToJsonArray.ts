import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_isFunction_ToJsonArray = (): void => _test_functional_isFunction(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => ToJsonArray) => typia.functional.isFunction(p),
)