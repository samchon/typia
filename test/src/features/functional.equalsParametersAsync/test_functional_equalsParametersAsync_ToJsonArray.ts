import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_equalsParametersAsync_ToJsonArray = _test_functional_equalsParametersAsync(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.equalsParameters(p),
)