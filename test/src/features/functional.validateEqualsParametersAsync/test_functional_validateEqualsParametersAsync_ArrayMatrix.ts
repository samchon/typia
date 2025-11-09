import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateEqualsParametersAsync_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ArrayMatrix")(ArrayMatrix)(
      (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
        typia.functional.validateEqualsParameters(p),
    );
