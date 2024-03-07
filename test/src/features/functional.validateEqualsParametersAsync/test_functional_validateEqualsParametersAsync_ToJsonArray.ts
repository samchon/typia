import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateEqualsParametersAsync_ToJsonArray =
  _test_functional_validateEqualsParametersAsync("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.validateEqualsParameters(p),
  );
