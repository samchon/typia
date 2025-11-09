import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateReturn_ToJsonArray = (): void => _test_functional_validateReturn(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => ToJsonArray) => typia.functional.validateReturn(p),
)