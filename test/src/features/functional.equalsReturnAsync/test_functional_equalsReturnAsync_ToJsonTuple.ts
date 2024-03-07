import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_equalsReturnAsync_ToJsonTuple =
  _test_functional_equalsReturnAsync("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.equalsReturn(p),
  );
