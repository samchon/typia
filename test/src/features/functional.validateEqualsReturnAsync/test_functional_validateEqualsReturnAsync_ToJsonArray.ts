import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateEqualsReturnAsync_ToJsonArray =
  _test_functional_validateEqualsReturnAsync("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      typia.functional.validateEqualsReturn(p),
  );
