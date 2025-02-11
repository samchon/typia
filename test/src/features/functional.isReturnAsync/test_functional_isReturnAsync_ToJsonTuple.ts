import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_isReturnAsync_ToJsonTuple =
  _test_functional_isReturnAsync("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.isReturn(p),
  );
