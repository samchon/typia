import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateParametersAsync_ArrayMatrix =
  _test_functional_validateParametersAsync("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      typia.functional.validateParameters(p),
  );
