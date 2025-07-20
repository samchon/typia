import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertEqualsFunctionAsyncCustom_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ArrayMatrix")(
      ArrayMatrix,
    )((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
