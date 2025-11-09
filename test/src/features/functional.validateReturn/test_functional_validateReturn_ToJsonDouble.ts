import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateReturn_ToJsonDouble = (): void => _test_functional_validateReturn(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => ToJsonDouble) => typia.functional.validateReturn(p),
)