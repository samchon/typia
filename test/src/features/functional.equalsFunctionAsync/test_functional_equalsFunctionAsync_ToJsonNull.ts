import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_equalsFunctionAsync_ToJsonNull =
  _test_functional_equalsFunctionAsync("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.equalsFunction(p),
  );
