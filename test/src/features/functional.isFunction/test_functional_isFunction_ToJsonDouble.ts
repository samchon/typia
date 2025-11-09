import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_isFunction_ToJsonDouble = (): void => _test_functional_isFunction(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => ToJsonDouble) => typia.functional.isFunction(p),
)