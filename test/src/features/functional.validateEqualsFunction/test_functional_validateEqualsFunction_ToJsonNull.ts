import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateEqualsFunction_ToJsonNull = _test_functional_validateEqualsFunction(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.validateEqualsFunction(p),
)