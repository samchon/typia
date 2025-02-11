import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertEqualsReturnAsyncCustom_ArrayMatrix =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
