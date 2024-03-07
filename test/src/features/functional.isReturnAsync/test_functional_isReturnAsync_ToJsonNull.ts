import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_isReturnAsync_ToJsonNull =
  _test_functional_isReturnAsync("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.isReturn(p),
  );
