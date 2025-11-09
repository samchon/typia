import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateParameters_ToJsonDouble = (): void => _test_functional_validateParameters(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => ToJsonDouble) => typia.functional.validateParameters(p),
)