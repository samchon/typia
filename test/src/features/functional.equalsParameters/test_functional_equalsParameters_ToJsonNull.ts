import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_equalsParameters_ToJsonNull = (): void => _test_functional_equalsParameters(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.equalsParameters(p),
)