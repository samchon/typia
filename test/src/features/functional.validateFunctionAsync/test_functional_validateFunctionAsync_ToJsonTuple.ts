import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateFunctionAsync_ToJsonTuple =
  _test_functional_validateFunctionAsync("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.validateFunction(p),
  );
