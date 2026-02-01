import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_isParametersAsync_ToJsonNull = (): Promise<void> => _test_functional_isParametersAsync(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.isParameters(p),
)