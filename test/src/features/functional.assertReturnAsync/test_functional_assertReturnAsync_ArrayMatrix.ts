import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertReturnAsync_ArrayMatrix =
  _test_functional_assertReturnAsync(TypeGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
    typia.functional.assertReturn(p),
  );
