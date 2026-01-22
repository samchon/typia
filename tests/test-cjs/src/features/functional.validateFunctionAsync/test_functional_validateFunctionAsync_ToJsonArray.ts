import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateFunctionAsync_ToJsonArray =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ToJsonArray")(ToJsonArray)(
      (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
        typia.functional.validateFunction(p),
    );
