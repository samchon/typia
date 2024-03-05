import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateEqualsReturn_ToJsonArray =
  _test_functional_validateEqualsReturn("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.validateEqualsReturn(p),
  );
