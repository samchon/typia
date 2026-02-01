import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_equalsFunction_ToJsonUnion = (): void => _test_functional_equalsFunction(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => ToJsonUnion) => typia.functional.equalsFunction(p),
)