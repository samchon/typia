import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateReturnAsync_ToJsonTuple =
  _test_functional_validateReturnAsync("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.validateReturn(p),
  );
