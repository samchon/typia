import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateFunctionAsync_ToJsonNull =
  _test_functional_validateFunctionAsync("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.validateFunction(p),
  );
