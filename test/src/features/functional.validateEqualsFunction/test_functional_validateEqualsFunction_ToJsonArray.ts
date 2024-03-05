import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateEqualsFunction_ToJsonArray =
  _test_functional_validateEqualsFunction("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.validateEqualsFunction(p),
  );
