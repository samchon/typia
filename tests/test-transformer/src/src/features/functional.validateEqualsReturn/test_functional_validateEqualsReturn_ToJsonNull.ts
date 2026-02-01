import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateEqualsReturn_ToJsonNull = (): void => _test_functional_validateEqualsReturn(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.validateEqualsReturn(p),
)