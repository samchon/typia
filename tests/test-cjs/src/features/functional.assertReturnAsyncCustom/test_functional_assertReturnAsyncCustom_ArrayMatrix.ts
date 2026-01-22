import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertReturnAsyncCustom_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ArrayMatrix")(
      ArrayMatrix,
    )((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
