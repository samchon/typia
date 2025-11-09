import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateParametersAsync_ToJsonNull = (): Promise<void> => _test_functional_validateParametersAsync(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.validateParameters(p),
)