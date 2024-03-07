import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_isParametersAsync_ToJsonArray =
  _test_functional_isParametersAsync("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.isParameters(p),
  );
