import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateParametersAsync_ToJsonArray =
  _test_functional_validateParametersAsync("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.validateParameters(p),
  );
