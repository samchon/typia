import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_isReturn_ToJsonUnion = _test_functional_isReturn(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => ToJsonUnion) => typia.functional.isReturn(p),
)