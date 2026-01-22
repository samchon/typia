import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateFunction_ToJsonArray = (): void =>
  _test_functional_validateFunction("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.validateFunction(p),
  );
