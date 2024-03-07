import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_isFunctionAsync_ToJsonArray =
  _test_functional_isFunctionAsync("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.isFunction(p),
  );
