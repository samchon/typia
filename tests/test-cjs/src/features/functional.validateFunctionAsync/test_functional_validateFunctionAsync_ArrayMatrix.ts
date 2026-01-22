import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateFunctionAsync_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ArrayMatrix")(ArrayMatrix)(
      (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
        typia.functional.validateFunction(p),
    );
