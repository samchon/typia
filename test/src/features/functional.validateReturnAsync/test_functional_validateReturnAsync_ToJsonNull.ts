import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateReturnAsync_ToJsonNull =
  _test_functional_validateReturnAsync("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.validateReturn(p),
  );
