import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_validateParametersAsync_ArrayRepeatedRequired =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ArrayRepeatedRequired")(
      ArrayRepeatedRequired,
    )((p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
      typia.functional.validateParameters(p),
    );
