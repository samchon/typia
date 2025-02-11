import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_equalsReturnAsync_ToJsonNull = _test_functional_equalsReturnAsync(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.equalsReturn(p),
)