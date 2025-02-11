import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_isReturn_ToJsonNull = _test_functional_isReturn(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.isReturn(p),
)