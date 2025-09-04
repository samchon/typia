import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertEqualsParametersAsync_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)("ArrayMatrix")(
      ArrayMatrix,
    )((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      typia.functional.assertEqualsParameters(p),
    );
