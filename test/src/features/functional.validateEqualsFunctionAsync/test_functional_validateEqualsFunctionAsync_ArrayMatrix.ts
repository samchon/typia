import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateEqualsFunctionAsync_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ArrayMatrix")(ArrayMatrix)(
      (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
        typia.functional.validateEqualsFunction(p),
    );
