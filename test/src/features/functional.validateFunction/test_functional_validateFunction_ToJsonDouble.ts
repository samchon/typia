import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateFunction_ToJsonDouble = (): void => _test_functional_validateFunction(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => ToJsonDouble) => typia.functional.validateFunction(p),
)