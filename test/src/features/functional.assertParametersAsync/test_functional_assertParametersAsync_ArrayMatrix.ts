import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertParametersAsync_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ArrayMatrix")(
      ArrayMatrix,
    )((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      typia.functional.assertParameters(p),
    );
