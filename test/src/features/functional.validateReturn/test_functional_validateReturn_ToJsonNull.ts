import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateReturn_ToJsonNull = (): void => _test_functional_validateReturn(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.validateReturn(p),
)