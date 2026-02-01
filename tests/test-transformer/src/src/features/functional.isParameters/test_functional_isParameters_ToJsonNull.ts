import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_isParameters_ToJsonNull = (): void => _test_functional_isParameters(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.isParameters(p),
)