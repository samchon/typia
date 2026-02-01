import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateEqualsReturn_ToJsonDouble = (): void => _test_functional_validateEqualsReturn(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => ToJsonDouble) => typia.functional.validateEqualsReturn(p),
)