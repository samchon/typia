import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_isReturnAsync_ToJsonArray =
  _test_functional_isReturnAsync("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.isReturn(p),
  );
