import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_equalsReturn_ToJsonUnion = (): void => _test_functional_equalsReturn(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => ToJsonUnion) => typia.functional.equalsReturn(p),
)