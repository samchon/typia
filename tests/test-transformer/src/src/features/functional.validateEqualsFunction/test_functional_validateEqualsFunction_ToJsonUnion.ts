import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateEqualsFunction_ToJsonUnion = (): void => _test_functional_validateEqualsFunction(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => ToJsonUnion) => typia.functional.validateEqualsFunction(p),
)