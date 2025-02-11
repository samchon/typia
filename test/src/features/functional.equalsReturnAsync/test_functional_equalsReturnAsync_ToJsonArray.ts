import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_equalsReturnAsync_ToJsonArray =
  _test_functional_equalsReturnAsync("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.equalsReturn(p),
  );
