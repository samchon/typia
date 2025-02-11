import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_isReturn_ToJsonArray = _test_functional_isReturn(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => ToJsonArray) => typia.functional.isReturn(p),
)